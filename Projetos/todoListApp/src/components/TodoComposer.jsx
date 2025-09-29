import { useState } from "react";
import { createTodo } from "../utils/createTodo";

function TodoComposer({ handleAddTodo }) {
  const [label, setLabel] = useState("");

  const handleUpdateLabel = (e) => setLabel(e.target.value);

  const handleAddTodoClick = () => {
    const todo = createTodo(label);
    handleAddTodo(todo);
    setLabel("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && label.length > 0) {
      handleAddTodoClick();
    }
  };

  return (
    <li>
      <input
        placeholder="What needs to be done?"
        type="text"
        value={label}
        onChange={handleUpdateLabel}
        onKeyDown={handleKeyDown}
      />
      <button disabled={label.length === 0} onClick={handleAddTodoClick}>
        Add Todo
      </button>
    </li>
  );
}

export default TodoComposer;
