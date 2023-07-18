const App = require("./app");
const app = new App();

describe("Integration", () => {
  it("should add transactiuons and print statement", () => {
    app.transactions.newTransaction("10/01/2012", 1000);
    app.transactions.newTransaction("13/01/2012", 2000);
    app.transactions.newTransaction("14/01/2012", -500);
    expect(app.printStatement()).toEqual(
      "date       || credit || debit || balance\n14/01/2012 ||         || -500 || 2500\n13/01/2012 ||  2000 ||        || 3000\n10/01/2012 ||  1000 ||        || 1000\nBalance: 2500"
    );
  });
});
