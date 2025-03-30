import { useState, useEffect } from 'react';

export const useUniversalWallet = () => {
  const [isReady, setIsReady] = useState(false);
  const [isConnected, setIsConnected] = useState({
    ethereum: false,
    solana: false
  });
  const [addresses, setAddresses] = useState({
    ethereum: null,
    solana: null
  });

  useEffect(() => {
    const checkWalletReady = () => {
      if (window.universalWallet) {
        setIsReady(true);
        updateWalletState();
      }
    };

    // Check if wallet is already ready
    checkWalletReady();

    // Listen for wallet ready event
    window.addEventListener('universalWalletReady', checkWalletReady);

    return () => {
      window.removeEventListener('universalWalletReady', checkWalletReady);
    };
  }, []);

  const updateWalletState = () => {
    const newState = {
      ethereum: window.universalWallet.isConnected('ethereum'),
      solana: window.universalWallet.isConnected('solana')
    };
    setIsConnected(newState);

    const newAddresses = {
      ethereum: window.universalWallet.getAddress('ethereum'),
      solana: window.universalWallet.getAddress('solana')
    };
    setAddresses(newAddresses);
  };

  const connect = async (network) => {
    try {
      if (network === 'ethereum') {
        await window.universalWallet.request({ method: 'eth_requestAccounts' });
      } else if (network === 'solana') {
        await window.universalWallet.request({ method: 'solana_connect' });
      }
      updateWalletState();
    } catch (error) {
      console.error(`Failed to connect to ${network}:`, error);
      throw error;
    }
  };

  const signTransaction = async (network, transaction) => {
    try {
      if (network === 'ethereum') {
        return await window.universalWallet.request({
          method: 'eth_signTransaction',
          params: [transaction]
        });
      } else if (network === 'solana') {
        return await window.universalWallet.request({
          method: 'solana_signTransaction',
          params: [transaction]
        });
      }
      throw new Error(`Unsupported network: ${network}`);
    } catch (error) {
      console.error(`Failed to sign transaction on ${network}:`, error);
      throw error;
    }
  };

  return {
    isReady,
    isConnected,
    addresses,
    connect,
    signTransaction
  };
}; 