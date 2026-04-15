import React from "react";

function ReactMemo({ todos }) {
  console.log("Rendering Todo List...");

  return (
    <div>
      <h3>Todo:</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ReactMemo);