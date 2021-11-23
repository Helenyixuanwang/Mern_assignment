
import './App.css';
import React, { useState } from 'react'
// import Footer from './components/Footer';
import Input from './components/Input';
import Display from './components/Display';

function App() {
  //lift up state in common parent component here in App.js
    const [todoList, setTodoList] = useState([]);
    // const [newtodo, setNewtodo] = useState("");
    // const [ finishtodo, setFinishtodo] = useState(false);
    

  return (
    <div className="App">
      <h1>Your Todo List</h1>
      <Input todoList= { todoList} 
          setTodoList= { setTodoList } 
          // newtodo={ newtodo } 
          // setNewtodo={setNewtodo}
          />
      <Display  todoList= { todoList} 
                setTodoList= { setTodoList }
               />
      
      
    </div>
  );
}

export default App;
