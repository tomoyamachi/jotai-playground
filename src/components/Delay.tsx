import React from "react";
import { countAtom } from "./Counter.tsx";
import { useAtomValue } from "jotai/index";



export function DelayedComponent() {
  const val = useAtomValue(countAtom);

  console.log("DelayedComponent", val);
  return <>
    <div>{val}</div>
    <PromiseComponent/>
  </>;
}

export const PromiseComponent = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: function DelayedComponent() {
          return <div>This is a delayed component</div>;
        }
      });
    }, 2000); // 2秒後に解決する
  });
});