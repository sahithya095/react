import React, {useState, useEffect, useRef} from 'react';

function CounterWithPrev(){
    const [count, setCount] = useState(0);
    const prevCount = useRef();
    //create a ref to store the previous value

    useEffect(()=>{
        prevCount.current = count;
    }, [count])

    return(
        <div>
            <p>Current Counter: {count}</p>
            <p>prevCount: {prevCount.current}</p>

            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
export default CounterWithPrev;