import { useCounter } from "../useCounter";

export const Counter = () => {
  const { num, increase, decrease, restart } = useCounter();
  return (
    <div>
      <p>{num}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={restart}>restart</button>
    </div>
  );
}