import { useEffect, useState } from "react";
import "./styles.css";

export default function ContadorDeTrocasDeAba() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleChange = () => {
      if (document.visibilityState !== "visible") return;
      setCount((c) => c + 1);
    };

    document.addEventListener("visibilitychange", handleChange);
    return () => {
      document.removeEventListener("visibilitychange", handleChange);
    };
  }, []);

  return (
    <p>
      Você saiu da aba <strong>{count}</strong> vez{count !== 1 && "es"}.
    </p>
  );
}
