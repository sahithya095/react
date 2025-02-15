import React ,{useReducer}from 'react';
import './reducer.css'
import appleImage from './apple.jpg';
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
     
  {Array.from({ length: apple }).map((_, index) => (
    <img
      key={index}src={appleImage}alt='Apple'
      style={{ width: '100px', height: '100px', margin: '5px', borderRadius: '10px' }}
    />
  ))}
  
      <p>Number of Apples: {apple}</p>
    
      <button className="button1" onClick={()=>dispatch({type:'ADD_APPLE', count: 0})}>Add Apple</button>
      <button className="button2" onClick={()=>dispatch({type:'REMOVE_APPLE', count: 0})}>Eat Apple</button>
    </div>
  );
}
export default App1;