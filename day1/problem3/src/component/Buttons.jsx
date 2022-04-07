import React from 'react';

const Button = (props)=>{
    return(
        <button id={props.id}>{props.name}</button>
    )
}

export default Button;