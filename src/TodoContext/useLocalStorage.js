import React from "react";

function useLocalStorage(key, initalValue) {

    const [item, setItem] = React.useState(initalValue);
    // Estado de carga
    const [loading, setLoading] = React.useState(true);
    // Estado de error
    const [error, setError] = React.useState(false);
    
    React.useEffect(() => {
        setTimeout(() => {
            try {
                // GET TODOs FROM LOCALSTORAGE
                const stringItem = localStorage.getItem(key);
                let parsedItem;

                if (!stringItem) {
                    parsedItem = initalValue;
                    localStorage.setItem(key, JSON.stringify(initalValue));
                } else {
                    parsedItem = JSON.parse(stringItem);
                    setItem(parsedItem);
                }
                setLoading(false);
                console.log('Initial entrance');

            } catch(error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, [])

    // FUNCTION SAVE
    const saveItem = (updatedItem) => {
        const stringUpdatedItem = JSON.stringify(updatedItem);
        localStorage.setItem(key, stringUpdatedItem);
        setItem(updatedItem);
    }

    return {
        item, 
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };

/*
const todoList = [
    { id: '1', task: 'Hacer ejercicio', completed: false },
    { id: '2', task: 'Barrer', completed: false},
    { id: '3', task: 'Lavar ropa', completed: true},
];
stringTodoList = JSON.stringify(todoList);
localStorage.setItem('TODOS_v1', stringTodoList);
*/