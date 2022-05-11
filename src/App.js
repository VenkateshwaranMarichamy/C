import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{value}</h2>
      <button onClick={increment}>Increase by 1</button>
      <button
        onClick={(e) => {
          console.log(e);
          setValue(value - 1);
        }}
      >
        decrease by 1
      </button>
    </div>
  );
}
