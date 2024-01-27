import { useState } from "react";
import { changeColor } from "../../utils/changeColor";

function ChangeColor() {
    const [color, setColor] = useState(changeColor());
   
    // console.log(color, setColor);
    return <div>
        <h1 style={{ color: color }}>This tag change color</h1>
        <button onClick={() => setColor(changeColor())}>Change color</button>
    </div>
}

export default ChangeColor;