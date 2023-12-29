import { useState } from "react"
import './AddTaskComponent.css'

interface AddTaskComponentProps {
  onAddTask: any
}

export default function AddTaskComponent({onAddTask}:AddTaskComponentProps) {
  const [text, setText] = useState('');
  return (
    <div className="add-task-container">
      <input 
        className="task-text"
        placeholder="Enter a task"
        type="text" 
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyUp={(e) => {
          if(e.key === 'Enter'){
            if(text.length>0) {
              onAddTask(text);
              setText('');
            }
          }
        }}
      />
      <button 
        className="secondary-bck"
        onClick={() => {
        console.log(text);
        if(text.length>0) {
          onAddTask(text);
          setText('');
        }
        
      }}>Add task</button>
    </div>
  )
}