import ToDoData from './components/todo/ToDoData';
import ToDoNew from './components/todo/ToDoNew';
import './styles/TodoStyle.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

export default function App() {
const [todoList , setTodoList] = useState([{id : 1 , title : "Learning React"} , {id : 2 , title : "Watching Youtube"}]);

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const updateData = (name) => {
    const rndInt = randomIntFromInterval(10, 10000);  
    setTodoList([...todoList , {id : rndInt , title : name} ])
}
  return (
      <>
            <div className="todo-container">
                <div className="todo-title">Todo List</div>
                <ToDoNew updateData  = {updateData} />
                <ToDoData todoList = {todoList} />
                <div className='todo-image'>
                  <img src={reactLogo} alt="" style={{fontSize: 100}} />
                </div>
            </div>
      </>
  ) 
}
