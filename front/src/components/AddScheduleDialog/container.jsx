import AddScheduleDialog from "./presentation";

import { connect } from "react-redux";

import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

//reduxでdialogの状態管理を切り替え(scheduleだけ受け取る)
const mapStateToProps = state =>({ schedule:state.addSchedule });

//dialogを閉じるためのメソッド
const mapDispatchToProps = dispatch =>({
  closeDialog:()=> {
    dispatch(addScheduleCloseDialog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AddScheduleDialog);