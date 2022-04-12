import React from 'react';

var style1 = {
    border: "1px solid grey",
    width: "21%",
    margin: "auto",
    display: "flex",
    height: "30px",
    marginTop: "7px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    color: "white",
    cursor:'pointer'
}

const TodoItem = ({title,backgroundColor,status})=>{
    return (
        <div style={{...style1,backgroundColor}}><h3>{`${title} - ${status}`}</h3></div>
    )
}

export default TodoItem