import { ethers } from 'ethers';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';

class WalletService {
  constructor() {
    this.ethereumProvider = null;
    this.solanaConnection = null;
    this.wallets = {
      ethereum: null,
      solana: null
    };
    this.prices = {
      ethereum: 0,
      solana: 0
    };
    this.startPriceUpdates();
  }

  async initialize() {
    // Check if we have stored wallet data
    const stored = await chrome.storage.local.get(['wallets']);
    if (stored.wallets) {
      this.wallets = stored.wallets;
    }

    // Initialize Ethereum provider
    if (window.ethereum) {
      this.ethereumProvider = new ethers.BrowserProvider(window.ethereum);
    }

    // Initialize Solana connection (using devnet for development)
    this.solanaConnection = new Connection('https://api.devnet.solana.com');
  }

  async connectEthereum() {
    try {
      // For demo purposes, generate a random address
      const address = '0x' + Math.random().toString(16).slice(2, 42);
      this.wallets.ethereum = { address };
      await chrome.storage.local.set({ wallets: this.wallets });
      return this.wallets.ethereum;
    } catch (error) {
      console.error('Failed to connect to Ethereum:', error);
      throw error;
    }
  }

  async connectSolana() {
    try {
      // For demo purposes, generate a random address
      const publicKey = 'Sol' + Math.random().toString(16).slice(2, 42);
      this.wallets.solana = { publicKey };
      await chrome.storage.local.set({ wallets: this.wallets });
      return this.wallets.solana;
    } catch (error) {
      console.error('Failed to connect to Solana:', error);
      throw error;
    }
  }

  async signEthereumTransaction(transaction) {
    try {
      if (!this.wallets.ethereum?.signer) {
        throw new Error('Ethereum wallet not connected');
      }
      return await this.wallets.ethereum.signer.signTransaction(transaction);
    } catch (error) {
      console.error('Failed to sign Ethereum transaction:', error);
      throw error;
    }
  }

  async signSolanaTransaction(transaction) {
    try {
      if (!this.wallets.solana?.keypair) {
        throw new Error('Solana wallet not connected');
      }
      transaction.partialSign(this.wallets.solana.keypair);
      return transaction;
    } catch (error) {
      console.error('Failed to sign Solana transaction:', error);
      throw error;
    }
  }

  getWalletAddress(network) {
    if (network === 'ethereum') {
      return this.wallets.ethereum?.address;
    } else if (network === 'solana') {
      return this.wallets.solana?.publicKey;
    }
    return null;
  }

  isConnected(network) {
    return !!this.wallets[network];
  }

  async startPriceUpdates() {
    // Initial price fetch
    await this.fetchPrices();
    
    // Update prices every 30 seconds
    setInterval(() => this.fetchPrices(), 30000);
  }

  async fetchPrices() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,solana&vs_currencies=usd&include_24hr_change=true');
      const data = await response.json();
      
      this.prices = {
        ethereum: {
          price: data.ethereum.usd,
          change24h: data.ethereum.usd_24h_change
        },
        solana: {
          price: data.solana.usd,
          change24h: data.solana.usd_24h_change
        }
      };
      
      this.updatePriceDisplay();
    } catch (error) {
      console.error('Failed to fetch prices:', error);
    }
  }

  updatePriceDisplay() {
    if (!this.elements.currentPrice || !this.elements.priceChange) return;

    const currencyData = this.prices[this.selectedCurrency];
    if (!currencyData) return;

    // Update current price
    this.elements.currentPrice.textContent = `$${currencyData.price.toFixed(2)}`;

    // Update 24h price change
    const change = currencyData.change24h.toFixed(2);
    const changeText = `${change > 0 ? '+' : ''}${change}%`;
    this.elements.priceChange.textContent = changeText;
    this.elements.priceChange.className = `price-change ${change >= 0 ? 'positive' : 'negative'}`;
  }
}

export const walletService = new WalletService();

document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const element = document.getElementById('yourElementId');
    
    // Check if element exists before adding listener
    if (element) {
        element.addEventListener('click', async () => {
            // Your click handler code
        });
    } else {
        console.error('Element not found');
    }
}); 