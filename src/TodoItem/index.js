import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {

    return (
        <li className='todo-element'>
            <div className='todo-container'>
                <div 
                    className='check-container'
                    onClick={props.onComplete}>
                    <span><FontAwesomeIcon icon={faCheck} className={`todo-check ${props.completed && "todo-check--active"}`} /></span>                
                </div>
                <p className={`todo-p ${props.completed && "todo-p--complete"}`}>{props.task}</p>
            </div>
            <div className='delete-container'>
                <span onClick={props.onDelete}><FontAwesomeIcon icon={faTrash} /></span>
            </div>
        </li>
    )
}

export { TodoItem };