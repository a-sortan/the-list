import TaskComponent from "./TaskComponent";
import type { Task } from "../types/Tasktype";
import { useState } from "react";

import './TaskListComponent.css'
import AddTaskComponent from "./AddTaskComponent";

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Be happy', done: true},
  {id: 1, text: 'Create a cool app', done: false},
  {id: 2, text: 'Play with cat', done: false},
];

interface TaskListComponentProps {
  showAside: any
}

export default function TaskListComponent({showAside}:TaskListComponentProps) {

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
    setTasks(tasks.filter(item => item.id !== taskId));
  }

  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false
      }
    ])
  }
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  return (
    <div className="task-list-container">
      <h2>Today</h2>
      <AddTaskComponent onAddTask={handleAddTask}/>
      <ul className="task-list">
        {tasks.map(item => 
          <li className="task gray-3" id={"tsk-"+item.id} key={item.id}>
            <TaskComponent 
              task={item} 
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
              showAside={showAside}
            />
          </li>)
        }
      </ul>
    </div>
  )
}