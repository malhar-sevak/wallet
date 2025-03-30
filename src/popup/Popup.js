class TokenWallet {
  constructor() {
      this.currentUser = null;
      this.selectedCurrency = 'ethereum';
      this.prices = {
          ethereum: 0,
          solana: 0
      };
      this.initializeWallet();
  }

  async initializeWallet() {
      // Wait for DOM to be fully loaded
      if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => this.initialize());
      } else {
          this.initialize();
      }
  }

  initialize() {
      console.log('DOM is fully loaded');
      this.setupElements();
      this.setupEventListeners();
      this.startPriceUpdates();
      this.loadState();
  }

  setupElements() {
      this.elements = {
          // Auth elements
          authSection: document.getElementById('auth-section'),
          walletSection: document.getElementById('wallet-section'),
          signupForm: document.getElementById('signup-form'),
          signinForm: document.getElementById('signin-form'),

          // Wallet elements
          ethereumButton: document.getElementById('ethereum-button'),
          solanaButton: document.getElementById('solana-button'),
          ethereumStatus: document.getElementById('ethereum-status'),
          solanaStatus: document.getElementById('solana-status'),
          walletBalance: document.getElementById('wallet-balance'),
          currentPrice: document.getElementById('current-price'),
          priceChange: document.getElementById('price-change'),
          transactionList: document.getElementById('transaction-list')
      };

      console.log('Elements found:', this.elements);

      // Verify critical elements
      if (!this.elements.ethereumButton || !this.elements.solanaButton) {
          console.error('Required elements not found');
      }
      if (!this.elements.ethereumButton) console.error('ethereum-button not found');
      if (!this.elements.solanaButton) console.error('solana-button not found');
      if (!this.elements.ethereumStatus) console.error('ethereum-status not found');
      if (!this.elements.solanaStatus) console.error('solana-status not found');
  }

  setupEventListeners() {
      // Auth navigation
      document.getElementById('show-signin')?.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleForms('signin');
      });

      document.getElementById('show-signup')?.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleForms('signup');
      });

      // Auth actions
      document.getElementById('signup-btn')?.addEventListener('click', () => this.signup());
      document.getElementById('signin-btn')?.addEventListener('click', () => this.signin());
      document.getElementById('logout-btn')?.addEventListener('click', () => this.logout());

      // Currency selection
      this.elements.ethereumButton?.addEventListener('click', () => this.switchCurrency('ethereum'));
      this.elements.solanaButton?.addEventListener('click', () => this.switchCurrency('solana'));

      // Send tokens
      document.getElementById('send-btn')?.addEventListener('click', () => this.sendTokens());
  }

  startPriceUpdates() {
      // Connect to WebSocket for real-time price updates
      const ws = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum,solana');
      
      ws.onmessage = (msg) => {
          const data = JSON.parse(msg.data);
          if (data.ethereum) {
              this.prices.ethereum = parseFloat(data.ethereum);
          }
          if (data.solana) {
              this.prices.solana = parseFloat(data.solana);
          }
          this.updatePriceDisplay();
      };
  }

  updatePriceDisplay() {
      const price = this.prices[this.selectedCurrency];
      this.elements.currentPrice.textContent = `$${price.toFixed(2)}`;
  }

  async signup() {
      const username = document.getElementById('signup-username').value;
      const password = document.getElementById('signup-password').value;

      if (!username || !password) {
          alert('Please fill in all fields');
          return;
      }

      try {
          this.currentUser = {
              username,
              password, // In production, this should be hashed
              wallets: {
                  ethereum: {
                      address: '0x' + Math.random().toString(16).slice(2, 40),
                      balance: 1.0
                  },
                  solana: {
                      address: 'Sol' + Math.random().toString(16).slice(2, 40),
                      balance: 10.0
                  }
              },
              transactions: []
          };

          await this.saveState();
          this.showWallet();
      } catch (error) {
          alert('Failed to create wallet');
      }
  }

  async signin() {
      const username = document.getElementById('signin-username').value;
      const password = document.getElementById('signin-password').value;

      try {
          const data = await chrome.storage.local.get(username);
          if (data[username] && data[username].password === password) {
              this.currentUser = data[username];
              this.showWallet();
          } else {
              alert('Invalid credentials');
          }
      } catch (error) {
          alert('Failed to sign in');
      }
  }

  logout() {
      this.currentUser = null;
      this.elements.authSection.style.display = 'block';
      this.elements.walletSection.style.display = 'none';
  }

  switchCurrency(currency) {
      this.selectedCurrency = currency;
      this.elements.ethereumButton.classList.toggle('active', currency === 'ethereum');
      this.elements.solanaButton.classList.toggle('active', currency === 'solana');
      this.updateWalletDisplay();
      this.updatePriceDisplay();
  }

  async sendTokens() {
      const recipient = document.getElementById('recipient-address').value;
      const amount = parseFloat(document.getElementById('amount').value);

      if (!recipient || !amount) {
          alert('Please fill in all fields');
          return;
      }

      if (amount > this.currentUser.wallets[this.selectedCurrency].balance) {
          alert('Insufficient balance');
          return;
      }

      try {
          this.currentUser.wallets[this.selectedCurrency].balance -= amount;
          
          // Add transaction to history
          this.currentUser.transactions.unshift({
              type: 'send',
              amount,
              currency: this.selectedCurrency,
              recipient,
              timestamp: Date.now()
          });

          await this.saveState();
          this.updateWalletDisplay();
          this.updateTransactionHistory();
          
          alert('Transaction successful!');
          document.getElementById('recipient-address').value = '';
          document.getElementById('amount').value = '';
      } catch (error) {
          alert('Transaction failed');
      }
  }

  updateWalletDisplay() {
      const wallet = this.currentUser.wallets[this.selectedCurrency];
      this.elements.walletBalance.textContent = 
          `${wallet.balance.toFixed(8)} ${this.selectedCurrency === 'ethereum' ? 'ETH' : 'SOL'}`;
      this.elements.ethereumStatus.textContent = this.selectedCurrency === 'ethereum' ? 'Connected' : 'Disconnected';
      this.elements.solanaStatus.textContent = this.selectedCurrency === 'solana' ? 'Connected' : 'Disconnected';
  }

  updateTransactionHistory() {
      const transactions = this.currentUser.transactions
          .filter(tx => tx.currency === this.selectedCurrency)
          .map(tx => `
              <div class="transaction-item">
                  <div>${tx.type} ${tx.amount} ${tx.currency}</div>
                  <div>To: ${tx.recipient}</div>
                  <div>${new Date(tx.timestamp).toLocaleString()}</div>
              </div>
          `).join('');
      
      this.elements.transactionList.innerHTML = transactions;
  }

  showWallet() {
      this.elements.authSection.style.display = 'none';
      this.elements.walletSection.style.display = 'block';
      this.updateWalletDisplay();
      this.updateTransactionHistory();
  }

  async saveState() {
      await chrome.storage.local.set({
          [this.currentUser.username]: this.currentUser
      });
  }

  async loadState() {
      // Check for existing session
      const data = await chrome.storage.local.get('currentUser');
      if (data.currentUser) {
          this.currentUser = data.currentUser;
          this.showWallet();
      }
  }

  toggleForms(form) {
      // Implement form toggling logic
  }
}

// Initialize wallet
document.addEventListener('DOMContentLoaded', () => {
  new TokenWallet();
}); 