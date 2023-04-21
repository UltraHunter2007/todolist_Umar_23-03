import React, {useState} from 'react'
import classes from './Modal.module.css'
import Input from "../Input/Input";
const Modal = ({ handleShow }) => {
    const handleChangeInput = (event) => {
        console.log(event.target.value, 'event');
    }

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <>
            <div onClick={handleShow} className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <input onChange={handleChangeInput} type="text" name="task" />
                <Input name="modal-input" placeholder="Введите текст" value={inputValue} onChange={handleInputChange} />
            </div>
        </>
    )
}

export default Modal