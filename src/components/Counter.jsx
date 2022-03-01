import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0); // same destructuringas const  {inputName} = req.body

  return (
    <div className="Counter">
      <p>
        You have a total of: <span>{counter}</span>
      </p>
      <button onClick={() => setCounter(counter + 1)}>Add 1</button>
      <button onClick={() => setCounter(counter - 1)}>Subtract 1</button>
    </div>
  );
}
