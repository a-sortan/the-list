import { useState } from "react"
import { Task } from "../types/Tasktype"
import './EditTaskComponent.css'

interface EditTaskComponentProps {
  task: Task,
  onChangeTask?: any
}

export default function EditTaskComponent({task}:EditTaskComponentProps) {
  const [title, setTitle] = useState(task.text);
  const [dueDate, setDueDate]  = useState(new Date().toISOString());
  return (
    <div className="task-editor-container">
      <div className="task-editor-header">
      </div>
      <h2>{title}</h2>
      <div className="task-editor-body">
      <label htmlFor="" className="grey-1">Task text</label>
      <input 
        className="task-text"
        placeholder="Enter a task"
        type="text" 
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label htmlFor="">Due date</label>
      <input 
          type="date" className="task-text" id="task-due-date" name="task-due-date" value={dueDate}  
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
        />
      <button className="secondary-bck" 
        onClick={()=> {
          console.log(task)

        }}
      >Save</button>

      </div>
    </div>
  )
}