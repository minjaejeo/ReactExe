import Sub2 from "./Sub2";
import { useContext } from "react";
import { themeContext1 } from "./themeContext";

function Sub1(){
    const theme1 = useContext(themeContext1);
    return (
        <div>
            <h1>Sub1</h1>
            <Sub2 />
        </div>
    )
}
export default Sub1;