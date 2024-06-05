import Sub3 from "./Sub3";
import { useContext } from "react";
import { themeContext1 } from "./themeContext";

function Sub2(){
    return (
        <div>
            <h1>Sub2</h1>
            <Sub3 />
        </div>
    )
}

export default Sub2;