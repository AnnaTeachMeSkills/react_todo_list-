import React from 'react';

import './AppHeader.css';

const AppHeader = (props) => {
    const {toDo, done} =props;

    return (
        <div className="AppHeader">
            <h1 className='headerName'>Todo List</h1>
            <p className="todoCounter">
                <span>to do - {toDo}</span>
                <span>done - {done}</span>
            </p>
        </div>
    )
}

export default AppHeader;