import {isSameDay} from "./calendar";
import dayjs from "dayjs";

const isScheduleEmpty = schedule => !schedule.title && !schedule.description && !schedule.location;

export const setSchedules = (calendar , schedules) => calendar.map(c =>({
  date:c,
  schedules:schedules.filter(e => isSameDay(e.date,c)),
}));

//dateをdayjsインスタンスに変換する
//作成後は、src/redux/schedules/effects.jsの中で変換する
export const formatSchedule = schedule => ({
  ...schedule,
  date:dayjs(schedule.date),
});

export const isCloseDialog = schedule =>{
  const message = "保存されていない変更を破棄しますか?";
  return isScheduleEmpty(schedule) || window.confirm(message);
  //上記記載は下記と同義
  //if (isScheduleEmpty(schedule)) {
  //  return true;
  // } else {
  //  return window.confirm(message);
  //}
};
