**Bank Tech Test**

Simple program to print bank statements. Transactions are added with a date (as a string in dd/mm/yyyy format) and amount as a number. When you are finished, run printStatement.

To see and example, clone the repo then in terminal, enter `node` and then `.load app.js`

_EXAMPLE_

To add transactions, once `app.js` is loaded run
`const app = new App();
app.transactions.newTransaction("14/01/2012", 1000);
app.transactions.newTransaction("28/05/2017", 1500);
app.transactions.newTransaction("12/08/2019", -1500);
app.printStatement();`

For credit, enter the amount as a positive integer, for debit, enter a negative integer.

here is an example of the output
`date       || credit || debit || balance
12/08/2019 ||         || -1500 || 1000
28/05/2017 ||  1500 ||        || 2500
14/01/2012 ||  1000 ||        || 1000
Balance: 1000`

Test coverage is 100% and can be found by running 'jest --coverage'
