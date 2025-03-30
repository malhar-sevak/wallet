import { walletService } from '../services/WalletService';

// Initialize wallet service
walletService.initialize();

// Create and inject the wallet provider
const walletProvider = {
  request: async ({ method, params }) => {
    switch (method) {
      case 'eth_requestAccounts':
        const ethWallet = await walletService.connectEthereum();
        return [ethWallet.address];
      
      case 'eth_signTransaction':
        return await walletService.signEthereumTransaction(params[0]);
      
      case 'solana_connect':
        const solWallet = await walletService.connectSolana();
        return solWallet.publicKey;
      
      case 'solana_signTransaction':
        return await walletService.signSolanaTransaction(params[0]);
      
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  },
  
  isConnected: (network) => walletService.isConnected(network),
  
  getAddress: (network) => walletService.getWalletAddress(network)
};

// Inject the provider into the window object
window.universalWallet = walletProvider;

// Notify the page that the wallet is ready
window.dispatchEvent(new CustomEvent('universalWalletReady')); 