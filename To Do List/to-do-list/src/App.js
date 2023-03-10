import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text : newTodo,
      complete : false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i){
        todo.complete = !todo.complete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <div className="pt-3">
        <h1>Add New To-Do Item!</h1>
        <form className="m-50 mx-auto p-10" onSubmit={(event) => { handleNewTodoSubmit(event) }}>
          <input onChange={(event) => { setNewTodo(event.target.value) }} type="text" value={newTodo} />
          <div className="p-3">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
      <hr />
      {todos.map((todo, i) => {
        const todoClasses = ["span"];
        if (todo.complete){
          todoClasses.push("line-through");
        }
        return (
          <div className="p-3" key={i}>
            <input onChange={(event)=>{handleToggleComplete(i)}} checked={todo.complete} type="checkbox"/>
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button className="btn btn-danger btn-sm ml-5" onClick={(event) => { handleTodoDelete(i) }}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
