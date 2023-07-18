class Transactions {
  constructor() {
    this.transactionHistory = [];
  }

  calculateBalance = (transactionHistory = this.transactionHistory) => {
    const total = transactionHistory
      .map((transaction) => +transaction.credit - +transaction.debit) //map over all transaction objects in tractionHistory, convery them to a numerical value
      .reduce((a, b) => a + b, 0); //take every transaction amount and sum
    return total;
  };

  newTransaction = (dateInput, amount) => {
    const split = dateInput.split("/"); //split dateInput at slash
    const day = split[0]; //extract each element of the date from new array created by split, assign a variable
    const month = split[1];
    const year = split[2];
    let date = new Date(year, month - 1, day); //create a date entry
    date = date.toLocaleDateString("en-GB"); //set format to British time
    let balance = this.calculateBalance(); // Calculate the current balance

    if (amount > 0) {
      balance += amount; // Add the credit amount to the balance
    } else if (amount < 0) {
      balance -= Math.abs(amount); // Subtract the debit amount from the balance
    }

    const transaction = {
      //create a transaction object
      date,
      credit: amount > 0 ? amount : null, //if amount has a value, set it to the credit key, otherwise set to null.
      debit: amount < 0 ? amount : null,
      balance,
    };

    this.transactionHistory.push(transaction); //push new transaction to the transactionHistory array
    return this.transactionHistory;
  };

  getTransactionHistory = () => {
    return this.transactionHistory; //return all transactions
  };
}

module.exports = Transactions;
