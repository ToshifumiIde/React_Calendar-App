import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

const rootReducer = combineReducers({calendar:calendarReducer});

export default rootReducer;

//3-2-1までコーディング完了

