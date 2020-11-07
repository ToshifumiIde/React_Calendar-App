//③②のactions.jsで作成されたaction(オブジェクト)を実行するのがreducer
//ただし、直接変更せず、新しいstateを返している点に注目。
//実際の変更（動作）は、
//rootReducer.jsにて、combineReducers関数を使うことで全てのreducerをrootReducerに渡す。
//createStore関数を用いてstateとして定数storeに渡す。
//Providerのstoreにstoreとして渡す。
//

import { INCREMENT , DECREMENT } from "./constants";
//INCREMENTとDECREMENTで定義した"INCREMENT"と"DECREMENT"を呼び出す

const initState = 0;
//初期値の登録

export const count = ( state = initState , { type , payload } ) => {
  //第一引数にstate(初期値は上で登録した0)
  //第二引数に②のactions.jsで作成したオブジェクトを分割代入している(typeにtype、payloadにpayload)
  //第二引数に渡されたtypeによって、実行するactionを変更して返却している
  //ここでは宣言しているだけで実行しないため、actions.jsはimportしていない
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
      default:
        return state;
  }
};
//定数countは第二引数に渡されるtypeによって、state + payloadか、state - payloadを返却している
//rootReducer.jsで受け取って、combineReducers()の実引数にreturnを格納している