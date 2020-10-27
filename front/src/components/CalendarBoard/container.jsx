import { connect } from "react-redux";
import CalendarBoard from "./presentation";

const mapStateToProps = state => ( { calendar:state.calendar } );

export default connect(mapStateToProps)(CalendarBoard);


import rootReducer from "./redux/rootReducer";

const store =createStore(rootReducer);

const App = () => (
  <Provider store={store}>
  <CalendarBoard />
  </Provider>
);
