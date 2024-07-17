import React from 'react';
import './TodoCount.css'
import { TodoContext } from '../TodoContext';

function TodoCount() {

    const {
        completed,
        total
    } = React.useContext(TodoContext);
    
    let message = ''
    if (completed === total && total > 0) {
        message = '¡Felicidades has completado todas las tareas!'
    }

    return (
        <div className='todo-count-container'>
            <h2 className='todo-complete'>{message}</h2>
            <h2 className='todo-state' >Hiciste <span>{completed}</span> de <span>{total}</span> TODOs</h2>
        </div>
    )
}

export { TodoCount };