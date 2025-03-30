class CryptoWallet {
    constructor() {
        this.currentUser = null;
        this.selectedCurrency = 'ethereum';
        this.prices = {
            ethereum: { price: 0, change: 0 },
            solana: { price: 0, change: 0 }
        };
        this.initialize();
    }

    initialize() {
        this.setupEventListeners();
        this.startPriceUpdates();
        this.loadState();
    }

    setupEventListeners() {
        // Auth navigation
        document.getElementById('show-signin').onclick = (e) => {
            e.preventDefault();
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('signin-form').style.display = 'block';
        };

        document.getElementById('show-signup').onclick = (e) => {
            e.preventDefault();
            document.getElementById('signin-form').style.display = 'none';
            document.getElementById('signup-form').style.display = 'block';
        };

        // Auth actions
        document.getElementById('signup-btn').onclick = () => this.signup();
        document.getElementById('signin-btn').onclick = () => this.signin();
        document.getElementById('logout-btn').onclick = () => this.logout();

        // Currency selection
        document.getElementById('eth-btn').onclick = () => this.switchCurrency('ethereum');
        document.getElementById('sol-btn').onclick = () => this.switchCurrency('solana');

        // Send tokens
        document.getElementById('send-btn').onclick = () => this.sendTokens();
    }

    async startPriceUpdates() {
        // Initial price fetch
        await this.fetchPrices();
        
        // Update prices every 10 seconds
        setInterval(() => this.fetchPrices(), 10000);
    }

    async fetchPrices() {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,solana&vs_currencies=usd&include_24hr_change=true');
            const data = await response.json();
            
            this.prices = {
                ethereum: {
                    price: data.ethereum.usd,
                    change: data.ethereum.usd_24h_change
                },
                solana: {
                    price: data.solana.usd,
                    change: data.solana.usd_24h_change
                }
            };
            
            this.updatePriceDisplay();
        } catch (error) {
            console.error('Failed to fetch prices:', error);
        }
    }

    updatePriceDisplay() {
        const priceElement = document.getElementById('live-price');
        const changeElement = document.getElementById('price-change');
        const data = this.prices[this.selectedCurrency];

        priceElement.textContent = `$${data.price.toFixed(2)}`;
        
        const change = data.change.toFixed(2);
        changeElement.textContent = `${change > 0 ? '+' : ''}${change}%`;
        changeElement.className = `price-change ${change >= 0 ? 'positive' : 'negative'}`;
    }

    async signup() {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }

        this.currentUser = {
            username,
            password,
            wallets: {
                ethereum: { balance: 1.0 },
                solana: { balance: 10.0 }
            }
        };

        await this.saveState();
        this.showWallet();
    }

    async signin() {
        const username = document.getElementById('signin-username').value;
        const password = document.getElementById('signin-password').value;

        const data = await chrome.storage.local.get(username);
        if (data[username]?.password === password) {
            this.currentUser = data[username];
            this.showWallet();
        } else {
            alert('Invalid credentials');
        }
    }

    logout() {
        this.currentUser = null;
        document.getElementById('auth-section').style.display = 'block';
        document.getElementById('wallet-section').style.display = 'none';
    }

    switchCurrency(currency) {
        this.selectedCurrency = currency;
        document.getElementById('eth-btn').classList.toggle('active', currency === 'ethereum');
        document.getElementById('sol-btn').classList.toggle('active', currency === 'solana');
        this.updatePriceDisplay();
        this.updateBalance();
    }

    updateBalance() {
        if (!this.currentUser) return;
        const balance = this.currentUser.wallets[this.selectedCurrency].balance;
        document.getElementById('wallet-balance').textContent = 
            `${balance.toFixed(6)} ${this.selectedCurrency === 'ethereum' ? 'ETH' : 'SOL'}`;
    }

    async sendTokens() {
        const recipient = document.getElementById('recipient').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (!recipient || !amount) {
            alert('Please fill in all fields');
            return;
        }

        if (amount > this.currentUser.wallets[this.selectedCurrency].balance) {
            alert('Insufficient balance');
            return;
        }

        this.currentUser.wallets[this.selectedCurrency].balance -= amount;
        await this.saveState();
        this.updateBalance();
        alert('Transaction successful!');
        
        document.getElementById('recipient').value = '';
        document.getElementById('amount').value = '';
    }

    showWallet() {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('wallet-section').style.display = 'block';
        this.updateBalance();
    }

    async saveState() {
        await chrome.storage.local.set({
            [this.currentUser.username]: this.currentUser
        });
    }

    async loadState() {
        const data = await chrome.storage.local.get('currentUser');
        if (data.currentUser) {
            this.currentUser = data.currentUser;
            this.showWallet();
        }
    }
}

// Initialize wallet when popup opens
document.addEventListener('DOMContentLoaded', () => {
    new CryptoWallet();
}); 