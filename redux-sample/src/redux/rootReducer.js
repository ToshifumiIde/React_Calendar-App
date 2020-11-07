import { combineReducers } from "redux";
import { count }from "./count/reducer";

const rootReducer = combineReducers({count});
//reducerで作成したcount(stateを返却)をreduxのcombineReducers関数の実引数で受け取り、rootReducerに格納している
//combineReducers()関数を用いると、すべてのreducerを渡すことが可能

export default rootReducer;
//index.jsにrootReducerを渡す