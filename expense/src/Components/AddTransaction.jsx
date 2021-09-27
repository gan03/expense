import { useState } from "react";
import { uniqueId } from "../id";
const AddTransaction = ({ handleAddnewTransaction }) => {
  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const addexpense = (type) => {
    // e.preventDefault();
    const data = {
      id: uniqueId(),
      name: text,
      amount: parseInt(num),
      type: type,
    };
    handleAddnewTransaction(data);

    setNum("");
    setText("");
  };
  return (
    <div>
      <h2>Add New Transaction</h2>
      <form action="">
        <label>Name</label>
        <div>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <label>Amount</label>
        <div>
          <input
            type="number"
            onChange={(e) => setNum(e.target.value)}
            value={num}
          />
        </div>
      </form>

      <button className="btn1" onClick={() => addexpense("income")}>
        ADD INCOME
      </button>
      <button className="btn2" onClick={() => addexpense("expense")}>
        ADD EXPENSE
      </button>
    </div>
  );
};

export default AddTransaction;
