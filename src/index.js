import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return <h1>Todo List</h1>;
}

const SearchBlock = () => {
    return <input placeholder="search" />;
}

const TodoList = () => {
    return (
        <ul>
            <li>learn JS</li>
            <li>learn React</li>
        </ul>
    );
}

const el = (
    <div>
        <AppHeader />
        <SearchBlock />
        <TodoList />
    </div>
);

ReactDOM.render(el, document.getElementById('root'));

