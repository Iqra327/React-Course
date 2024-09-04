// .....................................
// Todo List
// .....................................

import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [tasks, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const todoList = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      taskName: newTask,
      complete: false
    };
    setTodoList([...tasks, todoList]);
    // setTodoList([...task, newTask]);  can do this way as well
  };

  const removeTask = (id) => {
  //  const filteredTodo = tasks.filter((todo) =>  todo !== task );
    setTodoList(tasks.filter((task) =>  task.id !== id ));
  }

  const completeTask = (id) => {
    setTodoList(tasks.map((task) => {
     if(task.id === id){
        return {...task, complete: true};
      }else{
        return task;
      }
    }));
  }
  
  return (
   <div className="App">
    <div>
      <h1 className='heading'>Todo List</h1>
      <input type="text" onChange={handleChange}/>
      <button className='addTask' onClick={addTask}>Add Task</button>
    </div>
  
    <div className='allTasks'>
     {tasks.map((task) => {
      return (
      <div className='list'>
        <Task taskName = {task.taskName} id= {task.id} complete = {task.complete} removeTask={removeTask} completeTask={completeTask}/> 
      </div>
      )
     })}
    </div>
   </div>
  );
}

export default App;