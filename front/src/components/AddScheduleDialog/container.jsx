import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import { 
  addScheduleCloseDialog,
  addScheduleSetValue,
  addScheduleStartEdit,
} from "../../redux/addSchedule/actions";
import { asyncSchedulesAddItem } from "../../redux/schedules/effects";

//reduxでdialogの状態管理を切り替え(scheduleだけ受け取る)
const mapStateToProps = state =>({ schedule:state.addSchedule });


//dialogを閉じるためのメソッド
const mapDispatchToProps = dispatch => ({
  setSchedule:value =>{
    dispatch(addScheduleSetValue(value))
  },
  closeDialog: () => {
    dispatch(addScheduleCloseDialog(false));
  },
  saveSchedule:schedule => {
    dispatch(asyncSchedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  },

  setIsEditStart:()=>{
    dispatch(addScheduleStartEdit());
  }
});

const mergeProps = (stateProps , dispatchProps) =>({
  ...stateProps,
  ...dispatchProps,
  saveSchedule:()=> {
    const {
      schedule:{form:schedule}
    } = stateProps;
    dispatchProps.saveSchedule(schedule);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);