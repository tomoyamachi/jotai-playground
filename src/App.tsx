import "./App.css";
import {DelayedComponent} from "./components/Delay.tsx";
import {Suspense} from "react";
import {Counter} from "./components/Counter.tsx";
import {StoreCounter} from "./components/StoreCounter.tsx";
import {DevTools} from 'jotai-devtools'
import 'jotai-devtools/styles.css'
import {postsAtom} from "./atoms.ts";
import {useSetAtom} from "jotai/react";

function App() {

    const refreshAtom = useSetAtom(postsAtom)
    return (
        <>
            <DevTools/>
            <button onClick={() => {
                refreshAtom();
            }}>Force refresh
            </button>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <DelayedComponent/>
                </Suspense>
            </div>
            <div className="App">
                <Counter/>
            </div>
            <div className="App">
                <StoreCounter/>
            </div>
        </>
    );
}


export default App;
