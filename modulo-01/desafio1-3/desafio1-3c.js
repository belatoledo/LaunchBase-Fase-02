const users = [
    {
      name: "Salvio",
      incomes: [115.3, 48.7, 98.3, 14.5],
      expenses: [85.3, 13.5, 19.9]
    },
    {
      name: "Marcio",
      incomes: [24.6, 214.3, 45.3],
      expenses: [185.3, 12.1, 120.0]
    },
    {
      name: "Lucia",
      incomes: [9.8, 120.3, 340.2, 45.3],
      expenses: [450.2, 29.9]
    }
  ];

function calculateBalance(incomes, expenses) {
      let incomesTotal = incomes.reduce((incomesTotal, incomes) => incomesTotal + incomes, 0)

      console.log(incomesTotal.toFixed(2));

      let expensesTotal = expenses.reduce((expensesTotal, expenses) => expensesTotal + expenses, 0)

      console.log(expensesTotal.toFixed(2));

      const balance = (incomesTotal - expensesTotal).toFixed(2)

      return balance
}

for(let user of users){
    const balance = calculateBalance(user.incomes, user.expenses)
    if (balance>0) {
        console.log(`${user.name} possui saldo POSITIVO de ${balance}`);
    } else {
        console.log(`${user.name} possui saldo NEGATIVO de ${balance}`);
    }
}


  