import React, { useState } from "react";
import ReactMemo from "./ReactMemo";
import UseMemo from "./UseMemo";

function App() {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const addCustomTodo = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("Task must be more than 5 characters");
    }
  };

  return (
      <div className="app">

  <div className="section">
    <h2>Task Manager</h2>
    <button onClick={() => setCount(count + 1)}>
      Increment ({count})
    </button>
  </div>

  <div className="section">
    <ReactMemo todos={todos} />
    <button onClick={addTodo}>Add Todo</button>

    <br /><br />

    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter task..."
    />
    <button onClick={addCustomTodo}>Submit</button>
  </div>

  <div className="section">
    <UseMemo todos={todos} />
  </div>

    </div>
  );
}

export default App;