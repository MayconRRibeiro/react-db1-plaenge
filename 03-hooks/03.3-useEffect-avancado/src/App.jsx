import { createRoot } from "react-dom/client";
import ExemploUseEffectAvancado from "./components/ExemploUseEffectAvancado";

const App = () => {
  return <ExemploUseEffectAvancado />;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
