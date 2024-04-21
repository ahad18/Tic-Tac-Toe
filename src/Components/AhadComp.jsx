import React, { useState } from "react";

function AhadComp() {
  const [state, setState] = useState(0);
  const increment =()=>{
    if(state<=19){
    setState(state+1)}
    else{
      setState(state)
    }
    
  }
  const decrement =()=>
{
  if(state>0){
  setState(state-1)}
  else{
    state(0)
  }
}
const reset =()=>{
  setState (0)
}

  return (
    <div className="container">
      <h1 className="text-center">Max Value is 20 | Min Value is 0</h1>
      <div className="bg-blue-500 p-10 text-3xl rounded m-20">
        {state}
      </div>
      <div className="flex justify-center ">
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
      
    </div>
  );
}

export default AhadComp;
