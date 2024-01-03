import { useState } from "react";
import { WeeklyTemplate, WeeklyRepeatedTasks, WeeklyTaskInstance } from "../types/WeeklyTemplateType";
import './WeeklyRepeatsComponent.css'

const weeklyTemplate:WeeklyTemplate[] = [
  {id:100, text:"Repeat me 3 times a week", repeatWeekly: 3 },
  {id:101, text:"Repeat me 7 times a week", repeatWeekly: 7 }
];

let weeklyId = 1000;

interface WeeklyRepeatsComponentProps {
  weeklyRepTasks?:WeeklyRepeatedTasks[]
}
export default function WeeklyRepeatsComponent({weeklyRepTasks}:WeeklyRepeatsComponentProps) {

  const [weeklyRepeats, setWeeklyRepeats] = useState(populateWeeklyRepTasks());

  function populateWeeklyRepTasks() {
    if(weeklyRepTasks) return weeklyRepTasks
    return generateWeeklyRepTasks(weeklyTemplate)
  }
  function generateWeeklyRepTasks(weeklyTemplate:WeeklyTemplate[]) {
    return weeklyTemplate.map(item => {
      let inst = [];
      for(let i = 0; i < item.repeatWeekly; i++) {
        inst.push({
          id: weeklyId++,
          done: false
        })
      }
      return {
        ...item,
        instances: inst
      }
    }) 
  }

  function handleChangeWeeklyTask(taskId: number, instance:WeeklyTaskInstance) {
    const wts = [...weeklyRepeats];
    const wt = wts.find(item => item.id === taskId);
    if(wt !== undefined) {
      wt.instances = wt.instances.map(item => {
        if(item.id === instance.id) {
          return instance;
        } else {
          return item;
        }
      })
    }
    setWeeklyRepeats(wts);
  }

  function getCurrentWeekIntervalStr() {
    let curr = new Date();
    let first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week(starting on monday)
    let last = first + 6; // last day is the first day + 6

    let firstday = new Date(curr.setDate(first)).toDateString();
    let lastday = new Date(curr.setDate(last)).toDateString();

    return firstday +" - "+ lastday;
  }

  function getDayName(dayNumber:number) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    if(dayNumber >= 0) {
      return daysOfWeek[dayNumber % 8];
    } 
    let today = new Date;
    return daysOfWeek[today.getDay() % 7];
  }

  function generateCheckBoxes(taskId:number, instances:WeeklyTaskInstance[]) {
    return instances.map(inst => {
      let day=0;
      if(inst.completed) {
        let dt = new Date(inst.completed);
        day = dt.getDay();
      }
      return (
        <>
          <div
            className={inst.done? "weekly-checkbox weekly-checkbox-done" : "weekly-checkbox"}
            key={inst.id}
            onClick={() => 
              {
                const tskInst:WeeklyTaskInstance = {
                  ...inst,
                  done: !inst.done
                };
                if(!inst.done) {
                  tskInst['completed'] = new Date().toISOString();
                } else {
                  delete tskInst['completed'];
                }
                handleChangeWeeklyTask(taskId, tskInst);
            }}
          >
            {inst.done ? getDayName(day) : "X"}
          </div>
        </>
      )
    })
    

  }

  return (
    <>
      <h3>weekly repeatable tasks</h3>
      <h4>{getCurrentWeekIntervalStr()}</h4>
      <ul className="task-list">
        {weeklyRepeats.map(item => {
          let checkboxes = generateCheckBoxes(item.id, item.instances);
          return (
            <li className="task task-weekly gray-3" key={item.id}>
              <div>
                <span>{item.text}</span>
                <span className="weekly-task-checkbox">
                  {checkboxes}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </>
    
  );
}