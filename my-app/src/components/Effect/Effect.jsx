import { useEffect, useState } from "react";
import { changeColor } from "../../utils/changeColor";

export const Effect = () => {
    const [count, setCount] = useState(+localStorage.getItem('count'));
//   const [color, setColor] = useState(changeColor());
  // useEffect(() => console.log("I am USE EFFECT"), []);
  // useEffect(() => console.log("I am every USE EFFECT"));
  // useEffect(() => console.log(`I only change with ${color}`), [color])
    useEffect(() => { localStorage.setItem('count', count) }, [count])
//   useEffect(
//     () => console.log(`I only change with ${count} and ${color}`),
//     [count, color]
//   );
  return (
    // <div style={{background: color}}>
    //   <p>{count}</p>
    //       <button onClick={() => setCount(count + 1)}>Click</button>
    //       <button onClick={() => setColor(changeColor())}>Change color</button>
    //   </div>
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};
