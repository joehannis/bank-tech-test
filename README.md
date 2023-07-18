**Bank Tech Test**

Simple program to print bank statements.

To see and example, clone the repo then in terminal, enter `node` and then `.load app.js`

To add transactions, once `app.js` is loaded run
`const app = new App();
app.transactions.newTransaction("14/01/2012", 1000);
app.transactions.newTransaction("28/05/2017", 1500);
app.transactions.newTransaction("12/08/2019", -1500);
app.printStatement();`

For credit, enter the amount as a positive integer, for debit, enter a negative integer.

when you are ready for a statement, run `app.printStatement();`
