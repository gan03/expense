const TranscationHis = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h2>Transaction Histroy</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.name} - {transaction.amount}
            <button
              className="btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TranscationHis;
