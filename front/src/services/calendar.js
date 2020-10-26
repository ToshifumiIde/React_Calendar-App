import dayjs from "dayjs";

export const createCalendar = () => {
  
  //今月の最初の日を追加
  const firstDay = dayjs().startOf("month");
  const firstDayIndex = firstDay.day();

  return Array(35)
  .fill(0)
  .map((_ ,i) => {
    const diffFormFirstDay = i - firstDayIndex;
    const day = firstDay.add(diffFormFirstDay, "day");
  
    return day ;
  });
};

