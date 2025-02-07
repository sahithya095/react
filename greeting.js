import React from "react";
function Greeting(isLoggedin){
    if(isLoggedin){
        return<h1>Welcome back React</h1>
    }
    else{
        return<h1>log in</h1>
    }
}
export default Greeting;