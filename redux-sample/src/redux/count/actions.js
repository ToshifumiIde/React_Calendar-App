//actionの生成(increment , decrement)
//payloadはnumber型で引数で受け取った分だけcountを増加または減少可能

import { INCREMENT , DECREMENT } from "./constants";

export const increment = (payload) =>({
  type:INCREMENT,
  payload
});

export const decrement = (payload) =>({
  type:DECREMENT,
  payload
});

