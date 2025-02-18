import React,{useState} from "react";
function Keyfunction(){
    const[key,setkey]=useState("");
    const handlekey=(e)=>{
        setkey(e.key);
    }
    return(
        <div className="app">
            <h1>Welcome to sai solutions</h1>
            {key && <h2>Pressed Key: {key}</h2>}
            <input type="text" onKeyDown={handlekey} placeholder="Enter here"/>

        </div>
    )
}
export default  Keyfunction;