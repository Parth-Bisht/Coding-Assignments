import {useState} from 'react';

export default function Counter(){
    const [count,setCount]=useState(0);

    const handleCount = (value)=>{
        setCount((prevState)=>prevState+value)
    }

    const countMultiply = ()=>{
        setCount(count*2)
    }
    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>handleCount(1)}>Increase</button>
            <button onClick={()=>handleCount(-1)}>Decrease</button>
            <button onClick={countMultiply}>Double</button>
        </>
    )
}