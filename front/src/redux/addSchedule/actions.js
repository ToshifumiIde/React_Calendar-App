//constants
export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";
export const SCHEDULES_DELETE_ITEM ="SCHEDULES_DELETE_ITEM";

//actions
export const addScheduleSetValue = payload => ({
  type:ADD_SCHEDULE_SET_VALUE,
  payload
});

export const addScheduleOpenDialog = () => ({
  type:ADD_SCHEDULE_OPEN_DIALOG,
});

export const addScheduleCloseDialog = () => ({
  type:ADD_SCHEDULE_CLOSE_DIALOG,
});

//削除したscheduleを、削除した配列のpayloadとして渡す
export const schedulesDeleteItem = payload => ({
  type:SCHEDULES_DELETE_ITEM,
  payload
});