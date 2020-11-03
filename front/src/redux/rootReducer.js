import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import scheduleReducer from "./schedules/reducer";


const rootReducer = combineReducers({
  calendar:calendarReducer,
  addSchedule:addScheduleReducer,
  schedules:scheduleReducer,
});

export default rootReducer;