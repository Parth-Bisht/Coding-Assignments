import React from "react";

function Timer() {
  const [seconds, setseconds] = React.useState(0);
  const [minutes, setminutes] = React.useState(0);
  const [minvalue, setminvalue] = React.useState("");
  const [secvalue, setsecvalue] = React.useState("");
  const [stop, setstop] = React.useState(false);

  const reset = () => {
    setminutes(0);
    setseconds(0);
    setstop(false);
  };

  React.useEffect(() => {
      let id = null;
      if(stop){
          id = setInterval(() => {
            if(seconds<1){
                if(minutes==0){
                    setminutes(0)
                    setseconds(59);
                clearInterval(id);
                if(seconds==0){
                    reset();
                }
                }
                else{
                    setminutes(minutes-1);
                    setseconds(59);
                    clearInterval(id);
                }
               
            }
            if(seconds>0){
                setseconds(seconds-1)
                
            }
          },1000)
      }
      else{
          clearInterval(id);
      }
      return ()=>{
          clearInterval(id);
      }
  })

  return (
    <div>
      <div className="form">
        <div className="counter">
          <span style={{ fontSize: "60px" }}>{minutes}m</span>
          <span style={{ marginTop: "15px", fontSize: "50px" }}>
            {seconds}s
          </span>
        </div>
        <div className='settimecont'>
          <input
            value={minvalue}
            onChange={(e) => setminvalue(e.target.value)}
            type="number"
            placeholder="Set minutes here "
          />
          <button onClick={()=>{setminutes(minvalue)}}>Set</button>
          <br />
          <input
            value={secvalue}
            onChange={(e) => setsecvalue(e.target.value)}
            type="number"
            placeholder="Set seconds here "
          />
          <button onClick={()=>{setseconds(secvalue)}}>Set</button>
        </div>
      </div>
      <div>
        <button className='buttons' onClick={() => setstop(!stop)}>
          {stop ? "STOP" : "START"}
        </button>
        <button className='buttons' onClick={reset}>RESET</button>
      </div>
    </div>
  );
}

export default Timer;
