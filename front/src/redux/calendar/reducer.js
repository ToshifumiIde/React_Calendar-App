//actionが実行されたときにどの様な状態になるかを定義する場所
//最初はデータがないため、初期値もreducerで定義する
import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions";


//初期値は今月のカレンダー
const day = dayjs();
const init = {
  year:day.year(),
  month:day.month() + 1,//月情報のインデックス番号（0~11）を返す
};

const calendarReducer = (state = init , action) =>{
  const { type , payload } = action;
  switch(type){
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};


export default calendarReducer;