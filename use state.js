import React ,{useState}from "react";
import "./use effect.js";
const UseState = () => {
    const[message,setmessage]=useState("Hello World");
    const changeMessage=()=>{
        setmessage("you clicked the button")}
    return(
        <div>
            <h1>{message}</h1>
            <CHILD onClick={changeMessage}>Click me</CHILD>
        </div>   
    )
}
export default UseState;
