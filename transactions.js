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
    this.errorHandling(dateInput, amount);

    const date = this.splitDate(dateInput);
    let balance = this.calculateBalance(); // Calculate the current balance

    balance += amount > 0 ? amount : -Math.abs(amount); // if amount is greater than 0, add to balance, if less than 0, subtract from balance

    return this.createTransactionObject(date, amount, balance); // Call the method to create the transaction object
  };

  getTransactionHistory = () => {
    return this.transactionHistory; //return all transactions
  };

  splitDate = (dateInput) => {
    const [day, month, year] = dateInput.split("/"); // Destructure the split array
    let date = new Date(year, month - 1, day);
    date = date.toLocaleDateString("en-GB"); //sets date object to use UK format
    return date;
  };

  createTransactionObject = (date, amount, balance) => {
    const transaction = {
      date,
      credit: amount > 0 ? amount : null, //if amount has a value, set it to the credit key, otherwise set to null.
      debit: amount < 0 ? amount : null,
      balance,
    };

    this.transactionHistory.push(transaction); //push to transactionHistory array
    return this.getTransactionHistory();
  };

  errorHandling = (dateInput, amount) => {
    if (typeof dateInput !== "string") {
      // If dateInput is not a string, throw error
      throw "Please enter the date as a string, in format dd/mm/yy";
    } else if (isNaN(amount)) {
      // If amount is not a number, throw error
      throw "Please enter the amount as a number";
    }
  };
}

module.exports = Transactions;
