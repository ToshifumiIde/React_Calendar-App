import {
  schedulesSetLoading,
  schedulesAddItem,
  schedulesFetchItem,
  schedulesDeleteItem,
  schedulesAsyncFailure,
} from "./actions";
import { 
  get,
  post,
  deleteRequest,
} from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem = ({month , year}) => async dispatch => {
  //loading:trueにするactionをdispatchする
  dispatch(schedulesSetLoading());

  try {
    // const result = await get(`schedules`);
    const result = await get(`schedules?month=${month}&year=${year}`);
    //意図的にエラーを発生させるためにいったん非表示
    const formatedSchedule = result.map(r => formatSchedule(r));
    //指定された月の予定を取得するAPIを叩く（月と年の指定は必須）
    //awaitで受け取ることで非同期処理が終わるまで処理をブロックしている
    //Promiseの中身だけをresultに格納している

    //services/schedule.jsで作成したformatScheduleを呼び出し、各resultの中身rをmap関数を用いて引数に格納し、新しい配列として返す    
    //reduxの状態として扱える様になったformatedScheduleをdispatchする
    dispatch(schedulesFetchItem(formatedSchedule));
  } catch (err) {
    // console.error(err)
    dispatch(schedulesAsyncFailure(err.message));
  }
  };
  
export const asyncSchedulesAddItem = schedule => async dispatch => {
  //loading:trueにするactionをdispatchする
  dispatch(schedulesSetLoading());

  try{
  const body = {...schedule, date:schedule.date.toISOString() };
  const result = await post ("schedules" , body);

  const newSchedule = formatSchedule(result);
  dispatch(schedulesAddItem(newSchedule));
  } catch (err) {
    console.error(err);

    dispatch(schedulesAsyncFailure(err.message));
  }
};

export const asyncSchedulesDeleteItem = id => async (dispatch , getState) => {
  //loading:trueにするactionをdispatchする
  dispatch(schedulesSetLoading());

  const currentSchedules = getState().schedules.items;
  //getState:thunkの第二引数でstoreのデータを取得することが可能
  //削除したscheduleを配列から削除して新しいstateをdispatchする要件があるため、
  //上記で実装。

  try {
  await deleteRequest(`schedules/${id}`);
  //deleteRequest()で削除を実行
  //pathはschedules/:idだったため、テンプレート文字列でpathを動的に作成

  //成功したらローカルのstateを削除
  const newSchedules = currentSchedules.filter(s => s.id !== id);
  dispatch(schedulesDeleteItem(newSchedules));
  //削除データをフロントからも消すため、filter()を用いてidが一致するものだけを排除している。
  } catch (err) {
    console.error(err);
    dispatch(schedulesAsyncFailure(err.message));
  }
};