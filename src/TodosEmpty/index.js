import React from 'react';
import './TodosEmpty.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons';

function TodosEmpty() {
    return (
        <div className='empty-container'>
            <span><FontAwesomeIcon icon={faBeerMugEmpty} style={{color: "#F08080",}} /></span>
            <p>¡Crea tu primer TODO!</p>
        </div>
    )
}

export { TodosEmpty };