import { useState } from "react";

export const useCounter = (initialVal = 0) => {
  const [ num, setNum ] = useState(initialVal);

  const increase = () => {
    setNum(num + 1);
  }
  const decrease = () => {
    setNum((prev) => prev - 1);
  }
  const restart = () => {
    setNum(0);
  }

  return { num, increase, decrease, restart}
}