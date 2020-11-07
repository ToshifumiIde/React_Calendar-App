//コンポーネントからreduxにアクセスできる様にする
import { connect } from "react-redux";
import { increment , decrement } from "../../redux/count/actions";
//actions.jsからincrementとdecrementを受け取っている

import Counter from "./presentation";

const mapStateProps = ({count}) =>({ count });
//上記は
//const mapStateProps = state => {
//  return {count:state.count};
//}と同義

const mapDispatchProps = dispatch => ({
  increment:count => {
    dispatch(increment(count));
  },
  decrement:count => {
    dispatch(decrement(count));
  }
});
//「必要なactionだけをdispatchする関数」
//を定義して、propsとして渡す。上記の様に定義することで
//props.increment()と呼び出せる様になる。
//actions.jsで作成した定数increment・decrementのpayloadにcountを渡している


export default connect(
  mapStateProps,
  mapDispatchProps,
)(Counter);
//mapStateProps   :storeからどのstateを引っ張ってくるかを定義している
//mapDispatchProps:どんなdispatcherをpropsに渡すかを定義している