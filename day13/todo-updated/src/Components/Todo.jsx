import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteTodo,toggleTodo } from '../Redux/todo/action';

function Todo({title,status,id}) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleChange = ()=>{
        navigate(`/todo/${id}`)
    }
    const handleDelete = ()=>{
        deleteTodo(dispatch,id)
    }
    const handleToggle = ()=>{
        toggleTodo(dispatch,id)
    }
  return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
      <p onClick={handleChange}>{title} - {`${status}`} </p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Mark as complete</button>
    </div>
  )
}

export default Todo
