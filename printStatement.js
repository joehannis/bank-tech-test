const printStatement = (transactionHistory) => {
  const header = "date       || credit || debit || balance"; //Header for statement
  const body = transactionHistory
    .map((transaction) => {
      //map over transactionHistory array
      return `${transaction.date} ||  ${transaction.credit || "      "} || ${
        transaction.debit || "      "
      } || ${transaction.balance}`; //return each property of the transaction objects, formatted
    })
    .reverse(); //Put in reverse chronological order
  const balanceArrayIndex = transactionHistory.length - 1; //get index number for all objects in the array
  const balance = transactionHistory[balanceArrayIndex].balance; //retrieve balance from the last object in the array (this will be the total)
  const footer = `Balance: ${balance}`;
  console.log([header, ...body, footer].join("\n")); //join at the new line the header, then spread the individual objects in the array
  //of the body, then jpin the footer for the balance.
  return [header, ...body, footer].join("\n");
};

module.exports = printStatement;
