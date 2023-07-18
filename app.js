const Transactions = require("./transactions");
const printStatement = require("./printStatement");

class App {
  constructor() {
    this.transactions = new Transactions(); //initializes new insrtance of Transactions class
  }

  printStatement() {
    const transactionHistory = this.transactions.getTransactionHistory(); //gets all transactions
    return printStatement(transactionHistory);
  }
}

module.exports = App;
