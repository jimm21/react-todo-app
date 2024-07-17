import './TodoAddButton.css';
import { TodoContext } from '../TodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import react from 'react';

function TodoAddButton() {
    const {
        setOpenModal,
    } = react.useContext(TodoContext);

    return (
        <div className='add-button-container'>
            <button onClick={(event)=>{
                setOpenModal(true);
            }}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
}

export { TodoAddButton };