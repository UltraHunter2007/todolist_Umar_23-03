import React from 'react';
import classes from './List.module.css'

const List = ({ tasks }) => {
    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.task}</li>
                ))}
            </ul>
        </>
    );
}

export default List;