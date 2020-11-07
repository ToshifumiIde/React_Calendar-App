//constants
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";

export const SCHEDULES_FETCH_ITEM = "SCHEDULES_FETCH_ITEM";
export const SCHEDULES_SET_LOADING = "SCHEDULES_SET_LOADING";

//actions
//Item追加
export const schedulesAddItem = payload => ({
  type:SCHEDULES_ADD_ITEM,
  payload
});
//ロード後に取得したデータを読み込む
export const schedulesFetchItem = payload => ({
  type:SCHEDULES_FETCH_ITEM,
  payload
});
//リクエスト送信前にローディング状態にする
export const schedulesSetLoading = () => ({
  type:SCHEDULES_SET_LOADING
});