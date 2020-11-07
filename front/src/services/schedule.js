import {isSameDay} from "./calendar";
import dayjs from "dayjs";

export const setSchedules = (calendar , schedules) => calendar.map(c =>({
  date:c,
  schedules:schedules.filter(e => isSameDay(e.date,c)),
}));

//dateをdayjsインスタンスに変換する
//作成後は、src/redux/schedules/effects.jsの中で変換する
export const formatSchedule = schedule =>({
  ...schedule,
  date:dayjs(schedule.date),
});