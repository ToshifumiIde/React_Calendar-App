import { schedulesSetLoading } from "./actions";
import { get } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem = ({month , year}) =>async dispatch => {
  //loading:trueにするactionをdispatchする
  dispatch(schedulesSetLoading());

  //指定された月の予定を取得するAPIを叩く（月と年の指定は必須）
  //awaitで受け取ることで非同期処理が終わるまで処理をブロックしている
  //Promiseの中身だけをresultに格納している
  const result = await get (`schedules?month=${month}&year=${year}`);

  //services/schedule.jsで作成したformatScheduleを呼び出し、各resultの中身rをmap関数を用いて引数に格納する
  const formatedSchedule = result.map (r => formatSchedule(r));

  //reduxの状態として扱える様になったformatedScheduleをdispatchする
  dispatch(schedulesFetchItem(formatedSchedule));
};