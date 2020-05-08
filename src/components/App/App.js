import React from 'react';

import AppHeader from '../AppHeader';
import SearchBlock from '../SearchBlock';
import TodoList from '../TodoList';
import './App.css';


const App = () => {

    const todoData = [
        { label: 'Learn HTML', important: false, id:1, },
        { label: 'Learn JS', important: true, id:2, },
        { label: 'Learn React', important: false, id:3, },
    ];

    return(
        <div className="App">
            <AppHeader />
            <SearchBlock />
            <TodoList todoItems={todoData} />
        </div>
    );
}

export default App;