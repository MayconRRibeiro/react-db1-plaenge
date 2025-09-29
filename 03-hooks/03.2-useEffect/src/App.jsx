import { createRoot } from "react-dom/client";
import ExemploUseEffect from "./components/ExemploUseEffect";

const App = () => {
  return <ExemploUseEffect />;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
