import React, { useEffect } from 'react'
import Todos from '../Components/Todos'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const navigate = useNavigate()
    const isAuth = useSelector((state)=>state.auth.isAuth);

    useEffect(()=>{
        if(!isAuth){
            navigate("/login")
        }
    },[])
   
  return (
    <div>
        <div>
          <Link to="/">Todos</Link>
          <Link to="/login">Login</Link>
      </div>
      <Todos/>
    </div>
  )
}

export default Home
