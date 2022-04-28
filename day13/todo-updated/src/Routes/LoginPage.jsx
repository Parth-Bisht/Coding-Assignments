import React, { useEffect } from 'react'
import Login from '../Components/Login';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginSuccess } from '../Redux/auth/action';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state)=>state.auth.isAuth)
    const handleLogin = (payload)=>{
        fetch(`https://reqres.in/api/login`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(payload)
        })
        .then((res)=>{
          if(res.status===200){
            res.json()
            .then((data)=>dispatch(loginSuccess(data.token)))
          }
          else{
            dispatch(loginFailure())
          }
        })        
    }

    useEffect(()=>{
      if(isAuth){
        navigate("/")
      }
    },[isAuth])
  return (
    <div>
        <div>
          <Link to="/">Todos</Link>
          <Link to="/login">Login</Link>
      </div>
      <Login handleLogin={handleLogin}/>
    </div>
  )
}

export default LoginPage
