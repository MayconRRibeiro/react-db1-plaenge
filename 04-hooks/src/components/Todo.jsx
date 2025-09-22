import { useState } from "react";

function Todo({ todo, handleUpdateTodo, handleDeleteTodo }) {
  const [editing, setEditing] = useState(false);

  const handleCheckboxClick = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });

  const handleEditClick = () => setEditing(!editing);

  const handleEditTodo = (e) =>
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });

  const handleDeleteClick = () => handleDeleteTodo(todo.id);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
    if (e.key === "Escape") {
      setEditing(false);
    }
  };

  return (
    <li>
      <label htmlFor={todo.id}>
        <div>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.completed}
            onChange={handleCheckboxClick}
          />
          <span />
        </div>
        {editing ? (
          <input
            type="text"
            value={todo.label}
            onChange={handleEditTodo}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span>{todo.label}</span>
        )}
      </label>
      <div>
        <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
        {!editing && <button onClick={handleDeleteClick}>Delete</button>}
      </div>
    </li>
  );
}

export default Todo;
