import React, { useState } from 'react'

function Login({handleLogin}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        let payload = {email,password};
        handleLogin(payload);
    }
  return (
    <div>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit} >
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" />
          <br />
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />
          <br />
          <input type="submit" />
      </form>
    </div>
  )
}

export default Login
