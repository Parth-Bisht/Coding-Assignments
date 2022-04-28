import {DELETE_TODO, GET_TODOS,ADD_TODO,TOGGLE_TODO} from './actionType';

export const getTodos = async (dispatch)=>{
    let r = await fetch(`http://localhost:3000/todos`)
    let d = await r.json();
    dispatch({
        type:GET_TODOS,
        payload: d
    })
}

export const deleteTodo = async(dispatch,id)=>{
    await fetch(`http://localhost:3000/todos/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })
    dispatch({
        type:DELETE_TODO,
        payload: id
    })
}

export const addTodo = async(dispatch,data)=>{
    let res = await fetch(`http://localhost:3000/todos`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      let d = await res.json();
      dispatch({
          type:ADD_TODO,
          payload:d
      })
}

export const toggleTodo = async(dispatch,id)=>{
     await fetch(`http://localhost:3000/todos/${id}`,{
        method:"PATCH",
        "headers":{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            status:true
        })
    })
    dispatch({
        type:TOGGLE_TODO,
        payload: id
    })
}
