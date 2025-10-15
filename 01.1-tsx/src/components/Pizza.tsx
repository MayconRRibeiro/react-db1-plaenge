import "./Pizza";

interface PizzaProps {
  name: string;
  description: string;
}

const Pizza = (props: PizzaProps) => {
  return (
    <div className="pizza">
      <h1>{props.name.toUpperCase()}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Pizza;
