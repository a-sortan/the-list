import type { Task } from "../types/Tasktype"
import './TaskComponent.css'

interface TaskComponentProps {
  task: Task,
  onChangeTask: any,
  onDeleteTask: any,
  showAside: any
}

export default function TaskComponent({task, onChangeTask, onDeleteTask, showAside}:TaskComponentProps) {
  return (
    <>
    <span className="task-label">
      <i 
        className={task.done ? "bi bi-check-square-fill secondary" : "bi bi-square"}
        onClick={() => 
          {
            const tsk:Task = {
              ...task,
              done: !task.done
            };
            if(!task.done) {
              tsk['completed'] = new Date().toISOString();
            } else {
              delete tsk['completed'];
            }
            onChangeTask(tsk)
          }
        }
      ></i> 
        {task.text}
      </span>
      <span className="task-control">
        <i 
          className="bi bi-pencil-square"
          onClick={() => {
            console.log('edit', task);
            console.log(showAside)
            showAside();
            }}
        ></i>
        <i 
          className="bi bi-trash3 red" 
          onClick={() => {
            onDeleteTask(task.id);
          }}>
        </i>
      </span>
      
    </>
  )
}