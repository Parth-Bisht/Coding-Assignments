import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid';
import { addTodo } from '../Redux/todo/action';

function TodoInput() {
  const dispatch = useDispatch();
  const [value,setValue] = useState("")
  const handleSubmit = ()=>{
    const data = {
      title:value,
      status:false,
      id: uuid()
    }
    addTodo(dispatch,data)
    setValue("")
  }
  return (
    <div>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Enter your task' />
      <button onClick={handleSubmit}>ADD</button>
    </div>
  )
}

export default TodoInput
