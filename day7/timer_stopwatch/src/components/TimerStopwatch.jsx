import React from 'react'
import Stopwatch from './Stopwatch'
import Timer from './Timer'

function Timer_Stopwatch() {
  const [show,setshow] = React.useState(true);
  return (
    <>
     <div className="mainCont">
        <div className="toggle">
            <button onClick={()=>setshow(!show)} className="btn">Timer</button>
            <button onClick={()=>setshow(!show)} className="btn">Stopwatch</button>
        </div>
        {show ? (<Stopwatch/>) : (<Timer/>) }
     </div>
    </>
  )
}

export default Timer_Stopwatch
