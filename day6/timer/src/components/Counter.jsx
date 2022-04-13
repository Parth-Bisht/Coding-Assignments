import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [stopcount, setstopCount] = React.useState(0);
  const [value, setValue] = React.useState("");
  const [stopValue, setstopValue] = React.useState("");
  const [start,setStart]=React.useState(false);

  const startTimer = (value) => {
    setCount(value);
  };

  const stopTimer = (value) => {
    setstopCount(value);
  };

  React.useEffect(()=>{
    let id;
      if(count<stopcount){
         id = setInterval(() => {
            setCount((count)=>{
                if(count==stopcount){
                    clearInterval(id);
                    return count
                }
                return Number(count) + 1
            })
          }, 1000);
      }
      else{
        id = setInterval(() => {
            setCount((count)=>{
                if(count==stopcount){
                    clearInterval(id);
                    return count
                }
                return Number(count) - 1
            })
          }, 1000);
      }
     

      return ()=>{
          clearInterval(id);
      }
  },[start])



  const resetAll = ()=>{
    setValue("");
    setstopValue("");
    setCount(0);
    setstopCount(0);
  }
  return (
    <div>
      <h2>Start Counter at: {count}</h2>
      <h2>Stop Counter at: {stopcount}</h2>

      <div>
       <label htmlFor="">Starts counter from: </label> <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Time to start"
        />
        <button onClick={() => startTimer(value)}>set</button>
        <br />
        <label htmlFor="">Counter stops at: </label> <input
          type="number"
          value={stopValue}
          onChange={(e) => setstopValue(e.target.value)}
          placeholder="Time to stop"
        />
        <button onClick={() => stopTimer(stopValue)}>set</button>
        <br />
        <button onClick={() =>setStart(!start)}>Start</button>
        <button onClick={()=>resetAll()}>Reset values</button>
      </div>
    </div>
  );
}

export default Counter;
