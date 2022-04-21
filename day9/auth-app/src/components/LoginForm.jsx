import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function LoginForm() {
    const [form,setForm] = useState({});
    const {logIn} = useContext(AuthContext);

    const handleChange = (e)=>{
        const field = e.target;
        setForm({
            ...form,
            [field.name]:field.value
        })
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      fetch(`https://reqres.in/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
      })
      .then((res)=>{
          if(res.status===200){
            logIn();
          }
          else{
            alert('Please fill all credentials')
          }
      })
      
    }
  return (
    <div>
    Login-Form
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" onChange={handleChange} name="email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={handleChange} name="password" />
            </div>
            <input type="submit" value="Login" />
        </form>
    </div>
      
    </div>
  )
}

export default LoginForm
