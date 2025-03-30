import React, { useState } from 'react';
import { useUniversalWallet } from '../hooks/useUniversalWallet';
import './App.css';

function App() {
  const { isReady, isConnected, addresses, connect, signTransaction } = useUniversalWallet();
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum');
  const [transactionStatus, setTransactionStatus] = useState('');

  const handleConnect = async (network) => {
    try {
      await connect(network);
      setTransactionStatus(`Connected to ${network}`);
    } catch (error) {
      setTransactionStatus(`Failed to connect: ${error.message}`);
    }
  };

  const handleSignTransaction = async () => {
    try {
      // Create a dummy transaction for demonstration
      const dummyTransaction = {
        to: '0x123...',
        value: '0x1',
        data: '0x'
      };

      const signedTx = await signTransaction(selectedNetwork, dummyTransaction);
      setTransactionStatus(`Transaction signed successfully: ${signedTx}`);
    } catch (error) {
      setTransactionStatus(`Failed to sign transaction: ${error.message}`);
    }
  };

  if (!isReady) {
    return (
      <div className="app">
        <h1>Universal Wallet Demo</h1>
        <p>Please install the Universal Wallet extension</p>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Universal Wallet Demo</h1>
      
      <div className="network-selector">
        <button
          className={selectedNetwork === 'ethereum' ? 'active' : ''}
          onClick={() => setSelectedNetwork('ethereum')}
        >
          Ethereum
        </button>
        <button
          className={selectedNetwork === 'solana' ? 'active' : ''}
          onClick={() => setSelectedNetwork('solana')}
        >
          Solana
        </button>
      </div>

      <div className="wallet-info">
        <h2>Wallet Status</h2>
        <p>Ethereum: {isConnected.ethereum ? 'Connected' : 'Disconnected'}</p>
        <p>Solana: {isConnected.solana ? 'Connected' : 'Disconnected'}</p>
        
        {addresses.ethereum && (
          <p>Ethereum Address: {addresses.ethereum}</p>
        )}
        {addresses.solana && (
          <p>Solana Address: {addresses.solana}</p>
        )}
      </div>

      <div className="actions">
        <button
          onClick={() => handleConnect(selectedNetwork)}
          disabled={isConnected[selectedNetwork]}
        >
          {isConnected[selectedNetwork] ? 'Connected' : `Connect ${selectedNetwork}`}
        </button>

        <button
          onClick={handleSignTransaction}
          disabled={!isConnected[selectedNetwork]}
        >
          Sign Transaction
        </button>
      </div>

      {transactionStatus && (
        <div className="status">
          <h3>Status:</h3>
          <p>{transactionStatus}</p>
        </div>
      )}
    </div>
  );
}

export default App; 