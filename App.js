import React from "react";
const FruitList=()=>{
  const fruits=['apple','cherry','banana'];
  return(
    <div>
      <h1>fruit list</h1>
      <ul>
        {fruits.map((fruit,index)=>(
          <li key={index}>{fruit}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default FruitList;