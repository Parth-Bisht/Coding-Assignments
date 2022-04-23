import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const RequiredAuth = ({children}) => {
    const {token} = useContext(AuthContext);
    const location = useLocation();

    if(token) return children
  return <Navigate to="/login" state={{from:location}} replace/>
}

export default RequiredAuth
