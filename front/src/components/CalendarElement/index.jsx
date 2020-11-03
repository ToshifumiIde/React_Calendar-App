import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import {isSameMonth , isSameDay , isFirstDay , getMonth } from "../../services/calendar";
import Schedule from "../Schedule";

const CalendarElement = ({ day , month , schedules }) =>{
  const today = dayjs();

  //今月以外をグレーダウンする
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day,currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary" ;

  //文字列のフォーマットの決定（月初めだけ、月情報を記載）
  const format = isFirstDay(day) ? "M月D日" : "D" ;

  //当日かどうかの判断
  // const today = dayjs();
  const isToday = isSameDay(day,today);

  return (
    <div className={styles.element}>
      <Typography 
        align="center"
        className={styles.date}
        color={textColor}
        component="div"
        variant="caption"
        >
          <span className={isToday ? styles.today :""}>
    { day.format(format) }
          </span>
      </Typography>
      <div className="{styles.schedules}">
        {schedules.map(e =>(
          <Schedule key={e.id} schedule={e}/>
        ))}
      </div>
    </div>
  );
};

export default CalendarElement;