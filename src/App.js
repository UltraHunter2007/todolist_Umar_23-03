import Modal from './components/Modal/Modal';
import { useState } from 'react';
import classes from './App.module.css'
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import List from './components/List/List'
import Input from "./components/Input/Input";
function App() {


    // const myUseState = (defaultValue) => {
    //   let state = defaultValue;
    //   function setState(newState) {
    //     state = newState
    //   }
    //   return [ state, setState ]
    // }

    // const [ state, setState ] = myUseState()

    // const [ count, setCount ] = useState(1);
    const [ isShow, setIsShow ]  = useState(false)

    const handleShow = () => {
        setIsShow(!isShow)
        console.log(isShow, 'isSHow');
    }

    // const handleAdd = () => {
    //   setCount((prevState) => prevState += 1)
    // }


    // const fc1 = (arg1, arg2) => {
    //   return arg1 + arg2
    // }

    // fc1(arg1 = 273, arg2 = 10)

    const tasks = [
        { id: 1, task: 'coding'},
        { id: 2, task: 'eat'},
        { id: 3, task: 'sleep'}
    ]

    return (
        <>
            <Container>
                <Input name="" placeholder="Найти" onChange={(event) => console.log(event.target.value, 'event')} />
                <div className={classes.wrapper}>
                    { isShow && <Modal handleShow={handleShow}  /> }
                    <Button handleClick={handleShow}><p>Добавить</p></Button>
                </div>
                <h2>Список задач</h2>
                <List tasks={tasks} />
            </Container>
        </>
    );
}

export default App;