import { createRoot } from "react-dom/client";
import TodoList from "./components/TodoList";
import "./index.css";

const App = () => {
  return <TodoList />;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
