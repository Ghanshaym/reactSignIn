import React from 'react';

const person = (props) => {
    return (
        <div>
            <p1>my name is {props.name} and i am {props.age} years old</p1><br/>
            <pi>{props.children}</pi>
        </div>
        
    )
}

export default person;