// Background script for handling extension-level operations
import { walletService } from '../services/WalletService';

// Initialize wallet service when extension loads
walletService.initialize();

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'CONNECT_WALLET':
      handleWalletConnect(request.network).then(sendResponse);
      return true;
    
    case 'SIGN_TRANSACTION':
      handleTransactionSign(request.network, request.transaction).then(sendResponse);
      return true;
  }
});

async function handleWalletConnect(network) {
  try {
    if (network === 'ethereum') {
      return await walletService.connectEthereum();
    } else if (network === 'solana') {
      return await walletService.connectSolana();
    }
  } catch (error) {
    console.error(`Failed to connect to ${network}:`, error);
    throw error;
  }
}

async function handleTransactionSign(network, transaction) {
  try {
    if (network === 'ethereum') {
      return await walletService.signEthereumTransaction(transaction);
    } else if (network === 'solana') {
      return await walletService.signSolanaTransaction(transaction);
    }
  } catch (error) {
    console.error(`Failed to sign ${network} transaction:`, error);
    throw error;
  }
} 