class Transactions {
  constructor() {
    this.transactionHistory = [];
  }

  calculateBalance = (transactionHistory = this.transactionHistory) => {
    const total = transactionHistory
      .map((transaction) => +transaction.credit - +transaction.debit)
      .reduce((a, b) => a + b, 0);
    return total;
  };

  newTransaction = (dateInput, amount) => {
    const split = dateInput.split("/");
    const day = split[0];
    const month = split[1];
    const year = split[2];
    let date = new Date(year, month - 1, day);
    date = date.toLocaleDateString("en-GB");
    let balance = this.calculateBalance(); // Calculate the current balance

    if (amount > 0) {
      balance += amount; // Add the credit amount to the balance
    } else if (amount < 0) {
      balance -= Math.abs(amount); // Subtract the debit amount from the balance
    }

    const transaction = {
      date,
      credit: amount > 0 ? amount : null,
      debit: amount < 0 ? amount : null,
      balance,
    };

    this.transactionHistory.push(transaction);
    return this.transactionHistory;
  };

  getTransactionHistory = () => {
    return this.transactionHistory;
  };
}

module.exports = Transactions;
