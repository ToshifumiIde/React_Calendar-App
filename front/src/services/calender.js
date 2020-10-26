import dayjs from "dayjs";

export const createCalendar = () =>{
  
  const firstDay = dayjs.startOf("month");
  const firstDayIndex = firstDay.day();

  return Array(35)
  .fill(0)
  .map((_ , i) => {
    const diffFormFirstDay = i - firstDayIndex;
    const day = firstDayIndex.add(diffFormFirstDay, "day");
    return day ;
  });
};
