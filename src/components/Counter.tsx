import { useAtom } from "jotai/index";
import { countAtom } from "../atoms.ts";

export const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return (
    <>
      Counter: {count} <button onClick={inc}>+1</button>
    </>
  );
};
