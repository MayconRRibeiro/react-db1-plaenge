import { createRoot } from "react-dom/client";
import Desafio06 from "../desafios/desafio06";

const App = () => {
  return <Desafio06 />;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
