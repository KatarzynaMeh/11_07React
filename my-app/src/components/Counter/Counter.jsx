import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count - 1)}>Minus</button>
        <button onClick={() => setCount(count + 1)}>Plus</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
}