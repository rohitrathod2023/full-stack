import React, { useEffect } from 'react'
import { useState } from 'react'

function task() {

    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState('')
    let id = 0
    const addTaskToList = ()=>{
        event.preventDefault()
        if(newTask.trim() === ''){
            return;
        }

        setTask(prevTasks => [...prevTasks, {task: newTask, taskid: task.length+1 }])
        setNewTask('')
    }
    const deletetask = (id)=>{
         setTask(prevTasks => prevTasks.filter(item=>item.taskid !== id))
    }


  return (
    <div>
        <h1>To do app</h1>
        <form onSubmit={addTaskToList}>
        <input 
        type="text"
        onChange={(e)=>setNewTask(e.target.value)}
         />
         <button  type = 'submit' onClick={addTaskToList}>add task</button>
         </form>
         <div>
            <ul>
                {task.map((item)=>{
                   return <div key={item.taskid}>
                        <li>
                        {item.task}
                        </li>
                        <button onClick={()=>deletetask(item.taskid)}>delete</button>
                    </div>
                }
                )}
            </ul>
         </div>
    </div>
    
  )
}

export default task