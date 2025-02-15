import React ,{useReducer}from 'react';
import './reducer.css'
//reducer function to track the number of the apples
function appleReducer(state=3,action){
  switch(action.type){
    case 'ADD_APPLE':
      return state + 1;
    case 'REMOVE_APPLE':
      return state - 1;
    default:
      return state;
  }
}
function App1(){
  const [apple,dispatch]=useReducer(appleReducer,3);
  return(
    <div className='App'>
      <h1 className='a'>Apple Counter</h1>
      <p>Number of Apples: {apple}</p>
      <button  className="button"onClick={()=>dispatch({type:'ADD_APPLE'})}>Add Apple</button>
      
      <button className="button" onClick={()=>dispatch({type:'REMOVE_APPLE'})}>Remove Apple</button>
    </div>
  );
}
export default App1;