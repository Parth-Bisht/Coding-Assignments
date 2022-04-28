import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleTodo() {
    const [d,setD] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:3000/todos/${id}`)
        .then((res)=>res.json())
        .then((data)=>setD(data))
    },[])
  return (
    <div>
      <h1>{d.title} - {`${d.status}`}</h1>
    </div>
  )
}

export default SingleTodo
