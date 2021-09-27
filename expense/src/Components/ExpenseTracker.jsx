import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import { useEffect, useState } from "react";
import TranscationHis from "./TranscationHis";

const ExpenseTracker = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const calculateExpense = () => {
    let income = 0,
      expense = 0;

    transactions.forEach((data) => {
      if (data.type === "income") {
        income += data.amount;
      } else if (data.type === "expense") {
        expense += data.amount;

      }
    });
    setExpense(expense);

    setIncome(income);
  };
  const handleAddnewTransaction = (data) => {
    setTransactions([...transactions, data]);
  }
  const handleDeleteTransaction = (id) => {
    const newTransactions = transactions.filter((item) => item.id !== id);
    setTransactions(newTransactions);
  };

  useEffect(() => {
    calculateExpense();
    // eslint-disable-next-line
  }, [transactions]);
  return (
    <div className="maindiv">
      <h1>Expense Tracker</h1>
      <Balance income={income} expense={expense} />
      <TranscationHis
        transactions={transactions}
        deleteTransaction={handleDeleteTransaction}
      />
      <AddTransaction handleAddnewTransaction={handleAddnewTransaction} />
    </div>
  );
};

export default ExpenseTracker;
