//②actionの生成(定数 increment , decrement)
//①で作成したaction typeをincrement、decrementのtypeに格納するオブジェクト{}を生成する
//payloadはnumber型で、引数で受け取った数値分だけcountを増加または減少させることが可能
//payloadが1の場合、1ずつ増加・減少する
//actionを定数として発行するところまでがactions.jsの役割。
//実際の状態更新は、reducer.jsが実行する。

import { INCREMENT , DECREMENT } from "./constants";

export const increment = (payload) => ({
  type:INCREMENT,
  payload
});

export const decrement = (payload) => ({
  type:DECREMENT,
  payload
});

