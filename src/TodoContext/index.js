import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {

    const [openModal, setOpenModal] = React.useState(false);
    
    // LOCALSTORAGE HOOK
    const {
        item: todos, 
        saveItem: setTodos,
        loading,
        error
    } = useLocalStorage('TODOS_v1', []);

    // SEARCH STATE
    const [searchValue, setSearchValue] = React.useState('');

    // COUNT STATE
    let completed = todos.filter(todo => todo.completed).length;
    let total = todos.length;

    // TODOs SEARCHED
    const searchedTodos = todos.filter(
        (todo) => todo.task.toLowerCase().includes(searchValue.toLowerCase())
    )

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos];
        let id = updatedTodos.length + 1;
        updatedTodos.push({
            id: id,
            task: newTodo,
            completed: false
        })
        setTodos(updatedTodos);
    }

    // FUNCTION UPDATE TODO
    const completeTodo = (id) => {
        const updatedTodos = [...todos];
        const indexTodo = updatedTodos.findIndex(todo => todo.id === id);
        updatedTodos[indexTodo].completed = !updatedTodos[indexTodo].completed;
        setTodos(updatedTodos); 
    }

    // FUNCTION DELETE TODO
    const deleteTodo = (id) => {
        const updatedTodos = [...todos];
        const indexTodo = updatedTodos.findIndex(todo => todo.id === id);
        updatedTodos.splice(indexTodo,1);
        setTodos(updatedTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completed, 
            total, 
            searchedTodos, 
            searchValue, 
            setSearchValue, 
            addTodo,
            completeTodo, 
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };