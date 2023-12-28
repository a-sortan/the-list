import TaskComponent from "./TaskComponent";
import type { Task } from "../types/Tasktype";
import { useState } from "react";

import './TaskListComponent.css'

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Be happy', done: true},
  {id: 1, text: 'Create a cool app', done: false},
  {id: 2, text: 'Play with cat', done: false},
];

export default function TaskListComponent() {

  function handleChangeTask(task: Task) {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return task;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteTask(taskId: number) {
    console.log("handleDeleteTask")
    setTasks(tasks.filter(item => item.id !== taskId));
  }

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  return (
    <div className="task-list-container">
      <h2>TaskList component</h2>
      <ul className="task-list">
        {tasks.map(item => 
          <li className="task" id={"tsk-"+item.id} key={item.id}>
            <TaskComponent 
              task={item} 
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
          </li>)
        }
      </ul>
    </div>
  )
}