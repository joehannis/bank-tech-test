const Transactions = require("./transactions");
const printStatement = require("./printStatement");

class App {
  constructor() {
    this.transactions = new Transactions();
  }

  printStatement() {
    const transactionHistory = this.transactions.getTransactionHistory();
    return printStatement(transactionHistory);
  }
}

module.exports = App;
