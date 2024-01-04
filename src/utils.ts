export function getDayName(dayNumber:number) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  if(dayNumber >= 0) {
    return daysOfWeek[dayNumber % 8];
  } 
  let today = new Date;
  return daysOfWeek[today.getDay() % 7];
}

export function getCurrentWeekIntervalStr(startingDay='Sun', format="en-US") {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const idx = daysOfWeek.indexOf(startingDay);
  let curr = new Date();
  let month = curr.getMonth();

  let first = curr.getDate() - curr.getDay() + idx; // First day is the day of the month - the day of the week(starting on monday)
  let last = first + 6; // last day is the first day + 6
  let firstday = new Date(curr.setDate(first)).toLocaleDateString(format, {weekday:"long", year:"numeric", month: "long", day: "numeric"});
  let lastday = new Date(curr.setDate(last));
  lastday.setMonth(month);
  return firstday +" - "+ lastday.toLocaleDateString(format, {weekday:"long", year:"numeric", month: "long", day: "numeric"});
}