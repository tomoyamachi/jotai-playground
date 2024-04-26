import "./App.css";
import { DelayedComponent } from "./components/Delay.tsx";
import { Suspense } from "react";
import { Counter } from "./components/Counter.tsx";
import { StoreCounter } from "./components/StoreCounter.tsx";

function App() {

  return (
    <>
      <h1>Vite + React</h1>
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
