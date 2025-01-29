import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [value, setValue] = useState("  ")
  const [todos, setTodos] = useState([
    { 
      id: 1, 
       title: "Homework"
    },
  ]);  

  // console.log(todos);

  const onClick =() => {
    const newTodos = [...todos,{ id: todos.length+1  ,title: value}]
    console.log(newTodos);
    setTodos(newTodos)
    setValue("")
    console.log(todos);
    
  }

  return (
    <>
      <div className="todo-container">
        <h2 className="app-title">Todo App</h2>
        <div className="todo-header">
          <input value={value} onChange={(e) => setValue(e.target.value)} className="add-input" type="text" placeholder="Vazifa yozing.."/>

          <button onClick={onClick} className="add-btn">Add</button>

            <h1>{value}</h1>
        </div>

        <div className="todo-list"> 
          {
            todos.map(t => {
              return(
                <TodoItem id={t.id} title={t.title}/>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Todo;
