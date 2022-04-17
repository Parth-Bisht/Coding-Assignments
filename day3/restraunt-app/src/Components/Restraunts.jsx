import React from 'react'
import Form from './Form';
import Restro from './Restro';

function Restraunts() {
  const [data,setdata] = React.useState([])
  React.useEffect(()=>{
    getdata();
  },[])
  const getdata = ()=>{
    fetch(`http://localhost:3000/restros`)
    .then((res) => res.json())
    .then((d)=>setdata(d))
    .catch((err)=>{
      console.log(err);
    })
  }
  const onadd = (newdata)=>{
    setdata([...data,newdata])
  }
  return (
    <>
    <Form onadd={onadd} />
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"15px"}}>
      {data.map((el)=>{
          return <Restro key={el.id} {...el}/>
      })}
    </div>
    </>
  )
}

export default Restraunts
