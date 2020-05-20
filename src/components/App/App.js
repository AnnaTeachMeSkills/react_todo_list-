import React from 'react';

import './App.css';
import AppHeader from '../AppHeader';
import SearchBlock from '../SearchBlock';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';


class App extends React.Component {

    ids = 10;

    state = {
        todoData: [
            { label: 'Learn HTML', important: false, done: false, id:1, },
            { label: 'Learn JS', important: false, done: false, id:2, },
            { label: 'Learn React', important: false, done: false, id:3, },
        ],
        detectedText: '',
    };

    

    deleteItem = (id) =>{
        this.setState((prevState ) => {
            const index = prevState.todoData.findIndex((elem) => elem.id === id);
            
            const newTodoData = [
                ...prevState.todoData.slice(0,index), 
                ...prevState.todoData.slice(index + 1)
            ];

            return {
                todoData: newTodoData
            };
        });
    } 

    addItem = (text) => {
        console.log(text);
        const item = {
            label: text,
            important: false,
            id: this.ids++,
        };

        this.setState(({ todoData }) => {
            const newArr = [...todoData, item];

            return {
                todoData: newArr
            }
        });
    }

    toggleProp = (id, arr, prop) => {
        const index = arr.findIndex((elem) => elem.id === id);
            
        const oldObj = arr[index];
        const newObj = {...oldObj, [prop]: !oldObj[prop]};
        
        return [
            ...arr.slice(0,index), 
            newObj,
            ...arr.slice(index + 1)
        ];
    
    }

    toggleDone = (id) => {
        this.setState(({ todoData }) =>{
            return {
                todoData: this.toggleProp(id, todoData, 'done')
            };
        });
    } 

    toggleImportant = (id) => {
        this.setState(({ todoData }) =>{
            return {
                todoData: this.toggleProp(id, todoData, 'important')
            }
        });
    } 
    
    search = (arr, detectedText) => {
        if(detectedText.length === 0){
            return arr;
        }
        return arr.filter((el) => {
            return el.label.indexOf(detectedText) > -1;
        });
    }

    render() {

        const { todoData, detectedText } = this.state;
        const detectedItems = this.search(todoData, detectedText );
        const done = todoData.filter((el) => el.done).length;
        const todo = todoData.filter((el) => !el.done).length;
        

        return(
            <div className="App">
                <AppHeader toDo={todo}  done={done}/>
                <SearchBlock />
                <TodoList 
                    todoItems={ detectedItems } 
                    onDelete={ this.deleteItem}
                    onToggleImportant={ this.toggleImportant }
                    onToggleDone={ this.toggleDone }
                />
                <ItemAddForm onItemAdd={ this.addItem}/>
            </div>
        );
    }
}


export default App;