import { atom, getDefaultStore, useAtomValue } from "jotai/index";

export const storeCountAtom = atom(0);
export const StoreCounter = () => {
  const count = useAtomValue(storeCountAtom);
  const inc = () => {getDefaultStore().set(storeCountAtom, (c) => c + 1)};
  return (
    <>
      StoreCounter: {count} <button onClick={inc}>+1</button>
    </>
  );
};