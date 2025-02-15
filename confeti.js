import React, { useReducer } from 'react';
import './App.css';
import confetti from 'canvas-confetti';

function appleReducer(state, action) {
  switch (action.type) {
    case 'ADD_APPLE':
      return state + 1;
    case 'EAT_APPLE':
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(appleReducer, 4);

  const handleEatApple = () => {
    if (state > 0) {
      dispatch({ type: 'EAT_APPLE' });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };
  const handleAddApple = () => {
    if (state > 0) {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div>
      <center>
      <h1>NUMBER OF APPLES: {state}</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {Array.from({ length: state }).map((_, index) => (
          <img
            key={index}
            src="https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg"
            alt="Apple"
            style={{ width: '150px', height: '200px', margin: '5px' }}
          />
        ))}
      </div>
      <a onClick={handleAddApple}>
      <button className='a' onClick={() => dispatch({ type: 'ADD_APPLE' }) } >ADD APPLE</button>
     </a>
      {/* onClick={() => dispatch({ type: 'ADD_APPLE' }) }> */}
        
      <button className='b' onClick={handleEatApple}>EAT APPLE</button>
      </center>
    </div>
  );
}

export default App;