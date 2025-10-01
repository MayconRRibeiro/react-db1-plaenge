import { createRoot } from "react-dom/client";
import UseEffectAvancado from "./exemplos/UseEffectAvancado";

const App = () => {
  return <UseEffectAvancado />;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
