import type { Task } from "../types/Tasktype"
import './TaskComponent.css'

interface TaskComponentProps {
  task: Task,
  onChangeTask: any,
  onDeleteTask: any
}

export default function TaskComponent({task, onChangeTask, onDeleteTask}:TaskComponentProps) {
  let checkStyle = task.done ? "bi bi-check-square-fill secondary" : "bi bi-square gray-1"
  return (
    <>
    <span className="task-label">
      <i 
        className={checkStyle}
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
      <i className="bi bi-trash3 gray-1" onClick={() => {
        console.log("delete", task)
        onDeleteTask(task.id);
        }}>
      </i>
    </>
  )
}