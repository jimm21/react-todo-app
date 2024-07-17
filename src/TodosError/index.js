import React from 'react';
import './TodosError.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function TodosError() {
    return (
        <div className='error-container'>
            <span><FontAwesomeIcon icon={faCircleExclamation} style={{color: "#8e1f1f",}} /></span>
            <p>Ha ocurrido un error</p>
        </div>
    )
}

export { TodosError };