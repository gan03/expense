const Balance = ({ income, expense }) => {
  return (
    <div className="balance">
      <div className="bal">
        <div className="income">
          <h3>Income</h3>
          <h3>{income}</h3>
        </div>
        <div className="expense">
          <h3>Expense</h3>
          <h3>{expense}</h3>
        </div>
        <div className="income1">
          <h2>Your Balance</h2>
          <h2>{income - expense}</h2>
        </div>
      </div>
    </div>
  );
};

export default Balance;
