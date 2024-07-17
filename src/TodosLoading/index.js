import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className="bouncing-loader">
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export { TodosLoading };