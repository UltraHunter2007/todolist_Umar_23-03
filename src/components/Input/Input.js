import React from 'react';
import classes from './Input.module.css'

const Input = ({name, placeholder, onChange}) => {
    return (
        <>
            <input type="text" name={name} placeholder={placeholder} onChange={onChange}/>
        </>
    );
};

export default Input;