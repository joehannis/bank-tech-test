const printStatement = (transactionHistory) => {
  const header = "date       || credit || debit || balance";
  const body = transactionHistory
    .map((transaction) => {
      return `${transaction.date} ||  ${transaction.credit || "      "} || ${
        transaction.debit || "      "
      } || ${transaction.balance}`;
    })
    .reverse();
  const balanceArrayLength = transactionHistory.length - 1;
  const balance = transactionHistory[balanceArrayLength].balance;
  const footer = `Balance: ${balance}`;
  console.log([header, ...body, footer].join("\n"));
  return [header, ...body, footer].join("\n");
};

module.exports = printStatement;
