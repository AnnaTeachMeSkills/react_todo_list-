import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchBlock from './components/SearchBlock/SearchBlock';
import TodoList from './components/TodoList';




const App = () => {

    const todoData = [
        { label: 'Learn HTML', important: false, id:1, },
        { label: 'Learn JS', important: true, id:2, },
        { label: 'Learn React', important: false, id:3, },
    ];

    return(
        <div>
            <AppHeader />
            <SearchBlock />
            <TodoList todoItems={todoData} />
        </div>
    );
}



ReactDOM.render(<App />, document.getElementById('root'));

