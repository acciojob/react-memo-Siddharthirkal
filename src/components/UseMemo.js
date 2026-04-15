import React, { useMemo } from "react";

function UseMemo({ todos }) {
  const totalTodos = useMemo(() => {
    console.log("Calculating total todos...");
    return todos.length;
  }, [todos]);

  return (
    <div>
      <h3>Total Tasks: {totalTodos}</h3>
    </div>
  );
}

export default UseMemo;