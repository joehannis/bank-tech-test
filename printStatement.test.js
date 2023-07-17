const printStatement = require("./printStatement");

describe("printStatement", () => {
  it("should be able to print a statement", () => {
    const transactionHistory = [
      { date: "14/01/2012", credit: 1000, debit: null, balance: 1000 },
      { date: "28/05/2017", credit: 2000, debit: null, balance: 3000 },
      { date: "17/07/2018", credit: null, debit: 500, balance: 2500 },
    ];
    expect(printStatement(transactionHistory)).toEqual(
      "date       || credit || debit || balance\n17/07/2018 ||         || 500 || 2500\n28/05/2017 ||  2000 ||        || 3000\n14/01/2012 ||  1000 ||        || 1000\nBalance: 2500"
    );
  });
});
