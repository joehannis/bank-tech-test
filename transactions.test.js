const Transactions = require("./transactions");

describe("Transactions", () => {
  it("should be able to create a new transaction", () => {
    const transactions = new Transactions();
    expect(transactions.newTransaction("14/01/2012", 1000)).toEqual([
      { date: "14/01/2012", credit: 1000, debit: null, balance: 1000 },
    ]);
  });
  it("should be able to create two transactions", () => {
    const transactions = new Transactions();
    transactions.newTransaction("14/01/2012", 1000);
    expect(transactions.newTransaction("28/05/2017", 1500)).toEqual([
      { date: "14/01/2012", credit: 1000, debit: null, balance: 1000 },
      { date: "28/05/2017", credit: 1500, debit: null, balance: 2500 },
    ]);
  });
  it("should be able to create two transactions, one with negative values", () => {
    const transactions = new Transactions();
    transactions.newTransaction("14/01/2012", 1000);
    expect(transactions.newTransaction("17/03/2015", -500)).toEqual([
      { date: "14/01/2012", credit: 1000, debit: null, balance: 1000 },
      { date: "17/03/2015", credit: null, debit: -500, balance: 500 },
    ]);
  });
  it("should retrireve all transactions", () => {
    const transactions = new Transactions();
    transactions.newTransaction("14/01/2012", 1000);
    transactions.newTransaction("28/05/2017", 1500);
    expect(transactions.getTransactionHistory()).toEqual([
      { date: "14/01/2012", credit: 1000, debit: null, balance: 1000 },
      { date: "28/05/2017", credit: 1500, debit: null, balance: 2500 },
    ]);
  });

  it("should calculate balance", () => {
    const transactions = new Transactions();
    expect(
      transactions.calculateBalance([
        { date: "14/01/2012", credit: 1000, debit: null, balance: 1000 },
        { date: "28/05/2017", credit: 1500, debit: null, balance: 2500 },
      ])
    ).toEqual(2500);
  });
});
