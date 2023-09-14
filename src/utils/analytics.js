export const calculateTotalExpensesAndIncome = (transactions) => {
    let totalExpenses = 0;
    let totalIncome = 0;
    let expenseCategory = {};
    let incomeCategory = {};
  transactions.forEach((transaction) => {
    if (transaction.type === "expense") {
      totalExpenses += transaction.amount;
      if (transaction.category in expenseCategory) {
        expenseCategory[transaction.category] += transaction.amount
      }else {
        expenseCategory[transaction.category] = transaction.amount;
      }
    } else if (transaction.type === "income") {
      totalIncome += transaction.amount;
      if (transaction.category in incomeCategory) {
        incomeCategory[transaction.category] += transaction.amount
      }else {
        incomeCategory[transaction.category] = transaction.amount;
      }
    }
  });

  return { totalExpenses, totalIncome, expenseCategory, incomeCategory };
  }


  export const randomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
}