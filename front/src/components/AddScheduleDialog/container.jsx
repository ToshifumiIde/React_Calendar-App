import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import { 
  addScheduleCloseDialog,
  addScheduleSetValue
} from "../../redux/addSchedule/actions";

//reduxでdialogの状態管理を切り替え(scheduleだけ受け取る)
const mapStateToProps = state =>({ schedule:state.addSchedule });

//dialogを閉じるためのメソッド
const mapDispatchToProps = dispatch =>({
  closeDialog:()=> {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule:value =>{
    dispatch(addScheduleSetValue(value))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AddScheduleDialog);