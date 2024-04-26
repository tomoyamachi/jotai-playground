import { getDefaultStore, useAtomValue } from "jotai/index";
import { storeCountAtom } from "../atoms.ts";

export const StoreCounter = () => {
  const count = useAtomValue(storeCountAtom);
  const inc = () => {getDefaultStore().set(storeCountAtom, (c) => c + 1)};
  return (
    <>
      StoreCounter: {count} <button onClick={inc}>+1</button>
    </>
  );
};