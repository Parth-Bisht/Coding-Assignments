import React from 'react';
import TodoItem from './TodoItem';

var style1 ={
    padding: "4px",
    borderRadius: "5px",
    border: "1px solid grey",
    outline: "none",
    fontSize: "20px"
}
var style2 = {
    marginLeft : "3px",
    padding: "4px 10px",
    borderRadius: "12px",
    cursor: "pointer"
}

function Todo(){
    const [query,setQuery]=React.useState("");
    const [task,setTask] = React.useState([]);

    const handleChange = (e)=>{
        // console.log(e.target.value)
        const {value} = e.target;
        setQuery(value);
    }
    const addTask = ()=>{
        const payload = {
            title:query
        }
        let newTask = [...task,payload];
        setTask(newTask);
        console.log(newTask);
    }
    console.log(task)
    return (
        <div>
        <div>
            <h1>Todo List</h1>
        </div>
        <div>
        <input style={style1} value={query} onChange={handleChange} placeholder='Write Something'/>
        <button style={{...style1,...style2}} onClick={addTask}>+</button>
        </div>
        <div>
            {task.map((item,index)=>{
                return <TodoItem backgroundColor={index%3==0?"#65579d":"#95093d"} {...item}/>
            })}
        </div>
        </div>

    )
}

export default Todo