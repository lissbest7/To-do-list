import { useState } from "react";
import "./InputForm.scss";
import { GoPlusCircle } from "react-icons/go";

function InputForm(props) {
  const [value, setValue] = useState('')
  function addHandler() {
    if (value.trim().length > 0) {
      props.handleAddTodo(value);
    }
  }
  
  return (
    <div className="input-form container">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add your next task" />
      <button onClick={addHandler}>
        <h1>Create</h1>
        <GoPlusCircle className="icon" />
      </button>
    </div>
  );
}

export default InputForm;
