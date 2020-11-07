import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import {createStore} from "redux";
//storeの生成を実行する関数

import rootReducer from "./redux/rootReducer";
//rootReducer.jsから全てのreducerを受け取る
import Counter from "./components/Counter/container";
//Counterコンポーネントを受け取っている
//厳密にはcontainer.jsxでconnectされたCounterを受け取っている

const store = createStore(rootReducer);
//全てのreducerを実引数として、createStore関数を用いてstoreを生成し、定数storeに格納している

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
//react-reduxのProviderを用いて、storeをreactに渡している
//Counterはcomponentsとして作成する

ReactDOM.render(<App />, document.getElementById("root"));
