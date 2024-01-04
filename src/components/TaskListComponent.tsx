import TaskComponent from "./TaskComponent";
import AddTaskComponent from "./AddTaskComponent";
import type { Task } from "../types/TaskType";
import { useState } from "react";
import './TaskListComponent.css'
import WeeklyRepeatsComponent from "./WeeklyRepeatsComponent";
import { WeeklyRepeatedTasks } from "../types/WeeklyTemplateType";

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Be happy', done: true},
  {id: 1, text: 'Create a cool app', done: false},
  {id: 2, text: 'Play with cat', done: false},
];

const exampleWeekRepeats:WeeklyRepeatedTasks[] = [
  {
    id:100, 
    text:"Repeat me 3 times a week", 
    repeatWeekly: 3, 
    instances:[
      {id:1001, done: true, completed:"2024-01-01T12:07:06.215Z"},
      {id:1002, done: true, completed:"2024-01-03T12:07:06.215Z"},
      {id:1003, done: false},
    ] 
  },{
    id:101, 
    text:"Repeat me 7 times a week", 
    repeatWeekly: 7,
    instances: [
      {id:1004, done: true, completed:"2024-01-01T12:07:06.215Z"},
      {id:1005, done: true, completed:"2024-01-02T12:07:06.215Z"},
      {id:1006, done: true, completed:"2024-01-03T12:07:06.215Z"},
      {id:1007, done: true, completed:"2024-01-04T12:07:06.215Z"},
      {id:1009, done: true, completed:"2024-01-05T12:07:06.215Z"},
      {id:1010, done: true, completed:"2024-01-06T12:07:06.215Z"},
      {id:1011, done: true, completed:"2024-01-07T12:07:06.215Z"}
    ]
  }
]

interface TaskListComponentProps {
  showAside: any
}

export default function TaskListComponent({showAside}:TaskListComponentProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  
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

  return (
    <div className="task-list-container">
      <h2><span className="gray-3">{new Date().toDateString()}</span></h2>
      <WeeklyRepeatsComponent weeklyRepTasks={exampleWeekRepeats} />
      {/* <h3>Task</h3> */}
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