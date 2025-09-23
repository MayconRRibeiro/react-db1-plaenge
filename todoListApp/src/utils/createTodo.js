export function createTodo(label) {
  return {
    id: Math.floor(Math.random() * 10000),
    label,
    completed: false,
  };
}