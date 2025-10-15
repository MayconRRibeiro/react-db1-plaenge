import { createRoot } from "react-dom/client";
import Pizza from "./components/Pizza";
import { StrictMode } from "react";

const App = () => {
  return (
    <div>
      <h1>Pizza Menu</h1>
      <Pizza
        name="Pizza de Pepperoni"
        description="Queijo Mussarela, Pepperoni"
      />
      <Pizza
        name="Pizza Havaiana"
        description="Presunto Fatiado, Abacaxi, Queijo Mussarela"
      />
      <Pizza
        name="Pizza de Carnes"
        description="Bacon, Pepperoni, Linguiça Italiana, Linguiça Chorizo"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
