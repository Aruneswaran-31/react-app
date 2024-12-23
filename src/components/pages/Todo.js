import React, { useState } from 'react'
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

function Todo() {
  const[task,setTask]=useState("");
  const[tasks,setTasks]=useState([]);
  const[completed,setCompleted]=useState(true);
  const handleSubmit=(e) => {
    e.preventDefault();
    if(task.trim()){
        setTasks([...tasks,{id:Date.now().toString(),name:task, completed:false}]);
        setTask("");
    }
  };
  function toggleCompleted(id){
    setTasks(
      tasks.map((t) =>t.id === id?{...t,completed: !t.completed}: t) 
    )
  }
  const filterTask = tasks.filter((t) =>completed || !t.completed)
    return (
      
    <div>
      <ResponsiveAppBar/>
        <h1>To-Do-Application</h1>
        <form onSubmit={handleSubmit}>
            <input type='text'placeholder="Today's Task?" 
            value={task} onChange={(e) => setTask(e.target.value)}/><br/>
            <button type='submit'>Add</button><br/>
        </form>
        <button onClick={() => setCompleted(!completed)}>{completed ?"Hide":"Show"}</button>
        <ul>
          {
            filterTask.map((t) => 
              <li key={t.id}><span style={{textDecoration: t.completed?'line-through':'none',color:t.completed?'red':'green',
              }}>{t.name}</span>
              <button onClick={() => toggleCompleted(t.id)}>
                {t.completed ? 'Undo': 'Completed'}</button>
              </li>

            )
            }
        </ul>
        
    </div>
  )
}

export default Todo