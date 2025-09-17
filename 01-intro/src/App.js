const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pizza Menu"),
    React.createElement(Pizza, {
      name: "Pizza de Pepperoni",
      description: "Queijo Mussarela, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Pizza Havaiana",
      description: "Presunto Fatiado, Abacaxi, Queijo Mussarela",
    }),
    React.createElement(Pizza, {
      name: "Pizza de Carnes",
      description: "Bacon, Pepperoni, Linguiça Italiana, Linguiça Chorizo",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
