import { TodoTitle } from '../TodoTitle';
import { TodoCount } from '../TodoCount';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoAddButton } from '../TodoAddButton';
import { TodosEmpty } from '../TodosEmpty';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

import React from 'react';
import { TodoContext } from '../TodoContext';

function AppUX() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoTitle />
            <TodoCount />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && !searchedTodos.length) && <TodosEmpty />}
                {!error && searchedTodos.map(
                    todo => (
                        <TodoItem 
                        key={todo.id} 
                        task={todo.task} 
                        completed={todo.completed}
                        onComplete={()=>{completeTodo(todo.id)}}
                        onDelete={()=>{deleteTodo(todo.id)}}
                        />
                    ))}
            </TodoList>
            
            <TodoAddButton />
            
            {openModal && 
                <Modal>
                    <TodoForm />
                </Modal>}
        </>
    );
}

export { AppUX };