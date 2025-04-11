import {atom} from "jotai/index";
import {atomWithRefresh} from "jotai/utils";

export const countAtom = atom(0);
export const storeCountAtom = atom(0);
export const postsAtom = atomWithRefresh((get) => {
        // trigger
        get(countAtom);
        console.log("calicurated");
        return fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json())
    }
)