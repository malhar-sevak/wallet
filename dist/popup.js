/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TokenWallet = /*#__PURE__*/function () {
  function TokenWallet() {
    _classCallCheck(this, TokenWallet);
    this.currentUser = null;
    this.selectedCurrency = 'ethereum';
    this.prices = {
      ethereum: 0,
      solana: 0
    };
    this.initializeWallet();
  }
  return _createClass(TokenWallet, [{
    key: "initializeWallet",
    value: function () {
      var _initializeWallet = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // Wait for DOM to be fully loaded
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function () {
                  return _this.initialize();
                });
              } else {
                this.initialize();
              }
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function initializeWallet() {
        return _initializeWallet.apply(this, arguments);
      }
      return initializeWallet;
    }()
  }, {
    key: "initialize",
    value: function initialize() {
      console.log('DOM is fully loaded');
      this.setupElements();
      this.setupEventListeners();
      this.startPriceUpdates();
      this.loadState();
    }
  }, {
    key: "setupElements",
    value: function setupElements() {
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
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _document$getElementB,
        _this2 = this,
        _document$getElementB2,
        _document$getElementB3,
        _document$getElementB4,
        _document$getElementB5,
        _this$elements$ethere,
        _this$elements$solana,
        _document$getElementB6;
      // Auth navigation
      (_document$getElementB = document.getElementById('show-signin')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function (e) {
        e.preventDefault();
        _this2.toggleForms('signin');
      });
      (_document$getElementB2 = document.getElementById('show-signup')) === null || _document$getElementB2 === void 0 || _document$getElementB2.addEventListener('click', function (e) {
        e.preventDefault();
        _this2.toggleForms('signup');
      });

      // Auth actions
      (_document$getElementB3 = document.getElementById('signup-btn')) === null || _document$getElementB3 === void 0 || _document$getElementB3.addEventListener('click', function () {
        return _this2.signup();
      });
      (_document$getElementB4 = document.getElementById('signin-btn')) === null || _document$getElementB4 === void 0 || _document$getElementB4.addEventListener('click', function () {
        return _this2.signin();
      });
      (_document$getElementB5 = document.getElementById('logout-btn')) === null || _document$getElementB5 === void 0 || _document$getElementB5.addEventListener('click', function () {
        return _this2.logout();
      });

      // Currency selection
      (_this$elements$ethere = this.elements.ethereumButton) === null || _this$elements$ethere === void 0 || _this$elements$ethere.addEventListener('click', function () {
        return _this2.switchCurrency('ethereum');
      });
      (_this$elements$solana = this.elements.solanaButton) === null || _this$elements$solana === void 0 || _this$elements$solana.addEventListener('click', function () {
        return _this2.switchCurrency('solana');
      });

      // Send tokens
      (_document$getElementB6 = document.getElementById('send-btn')) === null || _document$getElementB6 === void 0 || _document$getElementB6.addEventListener('click', function () {
        return _this2.sendTokens();
      });
    }
  }, {
    key: "startPriceUpdates",
    value: function startPriceUpdates() {
      var _this3 = this;
      // Connect to WebSocket for real-time price updates
      var ws = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum,solana');
      ws.onmessage = function (msg) {
        var data = JSON.parse(msg.data);
        if (data.ethereum) {
          _this3.prices.ethereum = parseFloat(data.ethereum);
        }
        if (data.solana) {
          _this3.prices.solana = parseFloat(data.solana);
        }
        _this3.updatePriceDisplay();
      };
    }
  }, {
    key: "updatePriceDisplay",
    value: function updatePriceDisplay() {
      var price = this.prices[this.selectedCurrency];
      this.elements.currentPrice.textContent = "$".concat(price.toFixed(2));
    }
  }, {
    key: "signup",
    value: function () {
      var _signup = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var username, password;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              username = document.getElementById('signup-username').value;
              password = document.getElementById('signup-password').value;
              if (!(!username || !password)) {
                _context2.next = 5;
                break;
              }
              alert('Please fill in all fields');
              return _context2.abrupt("return");
            case 5:
              _context2.prev = 5;
              this.currentUser = {
                username: username,
                password: password,
                // In production, this should be hashed
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
              _context2.next = 9;
              return this.saveState();
            case 9:
              this.showWallet();
              _context2.next = 15;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](5);
              alert('Failed to create wallet');
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[5, 12]]);
      }));
      function signup() {
        return _signup.apply(this, arguments);
      }
      return signup;
    }()
  }, {
    key: "signin",
    value: function () {
      var _signin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var username, password, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              username = document.getElementById('signin-username').value;
              password = document.getElementById('signin-password').value;
              _context3.prev = 2;
              _context3.next = 5;
              return chrome.storage.local.get(username);
            case 5:
              data = _context3.sent;
              if (data[username] && data[username].password === password) {
                this.currentUser = data[username];
                this.showWallet();
              } else {
                alert('Invalid credentials');
              }
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](2);
              alert('Failed to sign in');
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[2, 9]]);
      }));
      function signin() {
        return _signin.apply(this, arguments);
      }
      return signin;
    }()
  }, {
    key: "logout",
    value: function logout() {
      this.currentUser = null;
      this.elements.authSection.style.display = 'block';
      this.elements.walletSection.style.display = 'none';
    }
  }, {
    key: "switchCurrency",
    value: function switchCurrency(currency) {
      this.selectedCurrency = currency;
      this.elements.ethereumButton.classList.toggle('active', currency === 'ethereum');
      this.elements.solanaButton.classList.toggle('active', currency === 'solana');
      this.updateWalletDisplay();
      this.updatePriceDisplay();
    }
  }, {
    key: "sendTokens",
    value: function () {
      var _sendTokens = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var recipient, amount;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              recipient = document.getElementById('recipient-address').value;
              amount = parseFloat(document.getElementById('amount').value);
              if (!(!recipient || !amount)) {
                _context4.next = 5;
                break;
              }
              alert('Please fill in all fields');
              return _context4.abrupt("return");
            case 5:
              if (!(amount > this.currentUser.wallets[this.selectedCurrency].balance)) {
                _context4.next = 8;
                break;
              }
              alert('Insufficient balance');
              return _context4.abrupt("return");
            case 8:
              _context4.prev = 8;
              this.currentUser.wallets[this.selectedCurrency].balance -= amount;

              // Add transaction to history
              this.currentUser.transactions.unshift({
                type: 'send',
                amount: amount,
                currency: this.selectedCurrency,
                recipient: recipient,
                timestamp: Date.now()
              });
              _context4.next = 13;
              return this.saveState();
            case 13:
              this.updateWalletDisplay();
              this.updateTransactionHistory();
              alert('Transaction successful!');
              document.getElementById('recipient-address').value = '';
              document.getElementById('amount').value = '';
              _context4.next = 23;
              break;
            case 20:
              _context4.prev = 20;
              _context4.t0 = _context4["catch"](8);
              alert('Transaction failed');
            case 23:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[8, 20]]);
      }));
      function sendTokens() {
        return _sendTokens.apply(this, arguments);
      }
      return sendTokens;
    }()
  }, {
    key: "updateWalletDisplay",
    value: function updateWalletDisplay() {
      var wallet = this.currentUser.wallets[this.selectedCurrency];
      this.elements.walletBalance.textContent = "".concat(wallet.balance.toFixed(8), " ").concat(this.selectedCurrency === 'ethereum' ? 'ETH' : 'SOL');
      this.elements.ethereumStatus.textContent = this.selectedCurrency === 'ethereum' ? 'Connected' : 'Disconnected';
      this.elements.solanaStatus.textContent = this.selectedCurrency === 'solana' ? 'Connected' : 'Disconnected';
    }
  }, {
    key: "updateTransactionHistory",
    value: function updateTransactionHistory() {
      var _this4 = this;
      var transactions = this.currentUser.transactions.filter(function (tx) {
        return tx.currency === _this4.selectedCurrency;
      }).map(function (tx) {
        return "\n              <div class=\"transaction-item\">\n                  <div>".concat(tx.type, " ").concat(tx.amount, " ").concat(tx.currency, "</div>\n                  <div>To: ").concat(tx.recipient, "</div>\n                  <div>").concat(new Date(tx.timestamp).toLocaleString(), "</div>\n              </div>\n          ");
      }).join('');
      this.elements.transactionList.innerHTML = transactions;
    }
  }, {
    key: "showWallet",
    value: function showWallet() {
      this.elements.authSection.style.display = 'none';
      this.elements.walletSection.style.display = 'block';
      this.updateWalletDisplay();
      this.updateTransactionHistory();
    }
  }, {
    key: "saveState",
    value: function () {
      var _saveState = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return chrome.storage.local.set(_defineProperty({}, this.currentUser.username, this.currentUser));
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function saveState() {
        return _saveState.apply(this, arguments);
      }
      return saveState;
    }()
  }, {
    key: "loadState",
    value: function () {
      var _loadState = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return chrome.storage.local.get('currentUser');
            case 2:
              data = _context6.sent;
              if (data.currentUser) {
                this.currentUser = data.currentUser;
                this.showWallet();
              }
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function loadState() {
        return _loadState.apply(this, arguments);
      }
      return loadState;
    }()
  }, {
    key: "toggleForms",
    value: function toggleForms(form) {
      // Implement form toggling logic
    }
  }]);
}(); // Initialize wallet
document.addEventListener('DOMContentLoaded', function () {
  new TokenWallet();
});
/******/ })()
;
//# sourceMappingURL=popup.js.map