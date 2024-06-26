import { atom, useAtomValue } from "jotai/index";
import { countAtom } from "../atoms.ts";



export function DelayedComponent() {
  const val = useAtomValue(countAtom);

  return <>
    <div>Counter: {val}</div>
    <PromiseComponent/>
  </>;
}

const asyncAtom = atom(async (get) => {
  const count = get(countAtom)
  await new Promise(resolve => setTimeout(resolve, 1000));
  return `----Promise : ${count}----`;
});

export function PromiseComponent() {
  const val = useAtomValue(asyncAtom);
  return <div>{val}</div>;
}