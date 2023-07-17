const Transactions = require("./transactions");
const printStatement = require("./printStatement");

class App {
  constructor() {
    this.transactions = new Transactions();
  }

  printStatement() {
    const transactionHistory = this.transactions.getTransactionHistory();
    printStatement(transactionHistory);
  }
}

module.exports = App;

const app = new App();
app.transactions.newTransaction("14/01/2012", 1000);
app.transactions.newTransaction("28/05/2017", 1500);
app.transactions.newTransaction("12/08/2019", -1500);

app.printStatement();
