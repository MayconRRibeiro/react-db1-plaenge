import { useEffect, useState } from "react";
import "./styles.css";

export default function ExemploUseEffectCleanUp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`In effect: ${count}`);
    return () => {
      console.log(`In cleanup: ${count}`);
    };
  }, [count]);

  const handleClick = () => setCount(count + 1);

  if (count > 3) {
    return null;
  }

  return <button onClick={handleClick}>{count}</button>;
}
