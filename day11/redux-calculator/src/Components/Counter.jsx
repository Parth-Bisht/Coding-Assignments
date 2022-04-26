import React, { useContext, useState } from 'react'
import { addCounter, DecCounter, divCounter, IncCounter, mulCounter, subCounter,reset } from '../Redux/action';
import { AppContext } from '../Redux/AppContextProvider';


function Counter() {
    const [value,setValue] = useState('')
    const {dispatch,getState} = useContext(AppContext)
    const {counter} = getState();
    const handleInc = ()=>{
        dispatch(IncCounter(1));       
    }
    const handleDec = ()=>{
        dispatch(DecCounter(1));       
    }
    const handleAdd = ()=>{
        dispatch(addCounter(value))
    }
    const handleSub = ()=>{
        dispatch(subCounter(value))
    }
    const handleMul = ()=>{
        dispatch(mulCounter(value))
    }
    const handleDiv = ()=>{
        dispatch(divCounter(value))
    }
    const handlereset = ()=>{
        dispatch(reset())
    }
  return (
    <div>
        <div>
      <h1>Counter: {counter}</h1>
      </div>
      <div>
          <button onClick={handleInc}>Increment</button>
          <button onClick={handleDec}>Decrement</button>
      </div>
      <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Enter a number' />
      <div>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSub}>Subtract</button>
          <button onClick={handleMul}>Multiply</button>
          <button onClick={handleDiv}>Divide</button>
      </div>
      <div>
          <button onClick={handlereset}>RESET</button>
      </div>
    </div>
  )
}

export default Counter
