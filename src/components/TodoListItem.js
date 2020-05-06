import React from 'react';

import './TodoListItem.css';

const TodoListItem = ( {label, important} ) => {

    const style = {
        color: important ? 'tomato' : 'black',
    };

    return (
        <div className="todo-list-item">
            <span 
                className="todo-list-label"
                style={style}
            >
                { label }
            </span>
            <button className="btn btn-outline-success btn-important">
                <i className="fa fa-star" aria-hidden="true"></i>
            </button>
            <button className="btn btn-outline-danger">
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    );
}

export default TodoListItem;