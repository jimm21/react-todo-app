import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch() {

    const {
        searchValue, 
        setSearchValue
    } = React.useContext(TodoContext);

    return (
        <div className='input-container'>
            <input className='input-search' 
                    placeholder="Hacer ejercicio ..."
                    value={searchValue}
                    onChange={(event)=>{
                        setSearchValue(event.target.value);
                    }}
            ></input>
        </div>
    )
}

export { TodoSearch };