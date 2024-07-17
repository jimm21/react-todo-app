import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    return (
        <form className="form-container">
            <label>Digita el nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onChange}
                cols={40} rows={4} placeholder="Escribe aquí..."></textarea>
            <div className="form-button-container">
                <button type="button" className="form-button form-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="form-button form-button--add" onClick={onSubmit}>Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm };