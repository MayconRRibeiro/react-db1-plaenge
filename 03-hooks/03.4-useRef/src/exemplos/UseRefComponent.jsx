import { useRef, useState } from "react";

const UseRefComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    if (running === false) {
      ref.current = window.setInterval(() => setSeconds((s) => s + 1), 1000);
      setRunning(true);
    } else {
      window.clearInterval(ref.current);
      setRunning(false);
    }
  };

  return (
    <div>
      <p>{seconds}</p>
      <button onClick={handleClick}>{running ? "STOP" : "START"}</button>
    </div>
  );
};

export default UseRefComponent;
