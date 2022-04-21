import React,{useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'

function Navbar() {
    const {isLoggedIn} = useContext(AuthContext);
  return (
    <div style={{display:"flex",justifyContent:"space-between",border:"1px solid black",alignItems:"center",padding:"0px 10px"}}>
      <h2>Logo</h2>
      <div>{isLoggedIn?"Your are logged-In":"Please Log-In"}</div>
    </div>
  )
}

export default Navbar
