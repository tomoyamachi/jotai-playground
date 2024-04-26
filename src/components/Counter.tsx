import { atom, useAtom } from "jotai/index";

export const countAtom = atom(0);

export const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return (
    <>
      Counter: {count} <button onClick={inc}>+1</button>
    </>
  );
};
