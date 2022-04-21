import React,{useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'

function Home() {
    const {logOut} = useContext(AuthContext);
  return (
    <div>
      <h1>HOME</h1>
      <button onClick={logOut}>Log-out</button>
    </div>
  )
}

export default Home
