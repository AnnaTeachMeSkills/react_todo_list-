import React from 'react';

import AppHeader from '../AppHeader';
import SearchBlock from '../SearchBlock';
import TodoList from '../TodoList';
import './App.css';


class App extends React.Component {

    state = {
        todoData: [
            { label: 'Learn HTML', important: false, id:1, },
            { label: 'Learn JS', important: true, id:2, },
            { label: 'Learn React', important: false, id:3, },
        ]
    }

    deleteItem = (id) =>{
        this.setState(( { todoData } ) => {
            const index = todoData.findIndex((elem) => elem.id === id);
            todoData.splice(index, 1);

            return {
                todoData: todoData
            };
        });
    } 

    
    render() {
        return(
            <div className="App">
                <AppHeader />
                <SearchBlock />
                <TodoList todoItems={this.state.todoData} onDelete={ this.deleteItem}/>
            </div>
        );
    }
}


export default App;