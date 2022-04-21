import React, { createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isLoggedIn,setIsLoggedIn] = React.useState(false);
    const logIn = ()=>{
        setIsLoggedIn(true)
    }
    const logOut = ()=>{
        setIsLoggedIn(false)
    }
    return (
        <AuthContext.Provider value = {{isLoggedIn,logIn,logOut}}>{children}</AuthContext.Provider>
    )
}