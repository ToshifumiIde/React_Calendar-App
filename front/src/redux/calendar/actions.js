//constants
export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";

//actions(type,payloadを含む、オブジェクトを返却する関数)
export const calendarSetMonth = payload =>({
  type:CALENDAR_SET_MONTH,
  payload
});