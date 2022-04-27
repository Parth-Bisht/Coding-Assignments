import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../Redux/action';
import Todo from './Todo'
import TodoInput from './TodoInput'

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todos)

  useEffect(()=>{
    getTodos(dispatch )
  },[])
  return (
    <div>
      <h1>Todos List</h1>
      <TodoInput/>
      {todos.map((items)=>{
        return <Todo key={items.id} {...items}/>
      })}
    </div>
  )
}

export default Todos
