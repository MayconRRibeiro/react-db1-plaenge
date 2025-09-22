import { useState } from "react";
import TodoComposer from "./TodoComposer";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, label: "Learn React Hooks", completed: false },
    { id: 2, label: "Build a todo app", completed: true },
    { id: 3, label: "Master state management", completed: false },
  ]);

  const handleUpdateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <ul>
      <TodoComposer handleAddTodo={handleAddTodo} />

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
