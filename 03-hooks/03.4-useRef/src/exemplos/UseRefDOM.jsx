import { useRef } from "react";

const UseRefDOM = () => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.click();
    console.log("cliquei");
  };

  console.log(buttonRef);

  return (
    <button ref={buttonRef} onClick={handleClick}>
      CLICK ME !!
    </button>
  );
};

export default UseRefDOM;
