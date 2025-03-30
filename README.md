# Universal Wallet Extension

A browser extension that provides a standardized interface for connecting to blockchain networks in React applications. Supports Ethereum and Solana networks with a simple, developer-friendly API.

## Features

- Support for multiple blockchain networks (Ethereum and Solana)
- Simple React integration through a custom hook
- Secure key management and transaction signing
- Clean and intuitive user interface
- Cross-browser compatibility

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run build
   ```
4. Load the extension in your browser:
   - Open Chrome/Edge and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` directory from this project

## Usage in React Applications

1. Install the wallet hook:
   ```bash
   npm install @universal-wallet/react
   ```

2. Use the hook in your React components:
   ```jsx
   import { useUniversalWallet } from '@universal-wallet/react';

   function YourComponent() {
     const { isReady, isConnected, addresses, connect, signTransaction } = useUniversalWallet();

     const handleConnect = async () => {
       try {
         await connect('ethereum'); // or 'solana'
       } catch (error) {
         console.error('Failed to connect:', error);
       }
     };

     const handleSignTransaction = async () => {
       try {
         const signedTx = await signTransaction('ethereum', transaction);
         console.log('Signed transaction:', signedTx);
       } catch (error) {
         console.error('Failed to sign transaction:', error);
       }
     };

     if (!isReady) {
       return <div>Please install the Universal Wallet extension</div>;
     }

     return (
       <div>
         <button onClick={handleConnect}>
           {isConnected.ethereum ? 'Connected' : 'Connect'}
         </button>
         {addresses.ethereum && (
           <p>Address: {addresses.ethereum}</p>
         )}
       </div>
     );
   }
   ```

## API Reference

### useUniversalWallet Hook

The hook provides the following properties and methods:

- `isReady`: Boolean indicating if the wallet extension is installed and ready
- `isConnected`: Object with network connection status
  ```javascript
  {
    ethereum: boolean,
    solana: boolean
  }
  ```
- `addresses`: Object with connected wallet addresses
  ```javascript
  {
    ethereum: string | null,
    solana: string | null
  }
  ```
- `connect(network)`: Connect to a specific network
- `signTransaction(network, transaction)`: Sign a transaction on the specified network

## Security Considerations

- Private keys are stored securely in the browser extension
- Transactions require explicit user approval
- Network connections are encrypted
- No sensitive data is exposed to the web application

## Development

To run the demo application:

```bash
npm run dev
```

The demo will be available at `http://localhost:3000`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT License - see LICENSE file for details 