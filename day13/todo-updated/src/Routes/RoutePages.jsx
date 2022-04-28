import React from 'react'

import { Route, Routes } from 'react-router-dom';
import SingleTodo from '../Components/SingleTodo';
import Home from './Home';
import LoginPage from './LoginPage';

function RoutePages() {
  return (
    <div>
      
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/todo/:id" element={<SingleTodo/>}></Route>  
          <Route path="/login" element={<LoginPage/>}></Route>
          
      </Routes>
    </div>
  )
}

export default RoutePages
