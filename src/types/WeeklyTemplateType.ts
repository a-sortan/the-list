export type WeeklyTemplate = {
  id: number,
  text: string,
  repeatWeekly: number
}

export type WeeklyTaskInstance = {
  id: number,
  done: boolean,
  completed?: string
}

export type WeeklyRepeatedTasks = {
  id: number,
  text: string,
  repeatWeekly: number,
  instances: WeeklyTaskInstance[]
}