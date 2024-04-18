import React, { useState } from "react";

function AhadComp() {
  const [state, setState] = useState(0);
  const increment =()=>{
    setState(state+1)
  }
  const decrement =()=>
{
  setState(state-1)
}
const reset =()=>{
  setState (0)
}

  return (
    <div>
      <div className="bg-blue-500 p-10 text-3xl rounded m-20">
        {state}
      </div>
      <button onClick={increment} className="bg-green-500 p-2 text-3xl rounded">
        Increment
      </button>
      <button onClick={decrement} className="bg-red-500 p-2 mx-2 text-3xl rounded">
        Decrement
      </button>
      <button onClick={reset} className="bg-yellow-500 p-2  text-3xl rounded">
        Reset
      </button>
      
    </div>
  );
}

export default AhadComp;
