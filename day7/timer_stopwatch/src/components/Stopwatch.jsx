import React from 'react'

function Stopwatch() {
    const [seconds,setseconds]=React.useState(0);
    const [milliseconds,setmilliseconds]=React.useState(0);
    const [stop,setstop]=React.useState(false);

    React.useEffect(() => {
        let id ;
        if(stop){
            id = setInterval(() => {
                if(milliseconds>99){
                    setseconds(seconds+1);
                    setmilliseconds(0);
                    clearInterval(id)
                }
                if(milliseconds<=99){
                    setmilliseconds(milliseconds+1)
                }
            },10)
        }
        else{
            clearInterval(id);
        }
        return ()=>{
            clearInterval(id);
        }
    })

    const reset = ()=>{
        setmilliseconds(0);
        setseconds(0);
        setstop(false)
    }

  return (
    <div >
    <div className="counter">
      <span style={{fontSize:"60px"}}>{seconds}s</span><span style={{marginTop:"15px",fontSize:"50px"}}>{milliseconds}</span>
    </div>
    <div>
        <button className='buttons' onClick={()=>setstop(!stop)}>{stop?"STOP":"START"}</button>
        <button className='buttons' onClick={reset}>RESET</button>
    </div>
    </div>
  )
}

export default Stopwatch
