// import React from "react";
import AddScheduleDialog from "./presentation"
import { connect } from "react-redux";
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

//reduxでのdialogの状態管理を切り替える
const mapStateToProps = state =>({ schedule:state.addSchedule });

//dialogを閉じるためのメソッド
const mapDispatchToProps = dispatch =>({
  closeDialog:()=> {
    dispatch(addScheduleCloseDialog());
  }
});

export default connect(mapStateToProps , mapDispatchToProps)(AddScheduleDialog);