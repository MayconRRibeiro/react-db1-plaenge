import { useState } from "react";
import "./styles.css";

export default function ContadorDeTrocasDeAba() {
  const [count, setCount] = useState(0);

  return (
    <p>
      Você saiu da aba <strong>{count}</strong> vez{count !== 1 && "es"}.
    </p>
  );
}
