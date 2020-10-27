import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

const CalendarElement = ({ day }) =>{
  const isFirstDay = day.date() === 1; //文字列のフォーマットの設定
  const format = isFirstDay ? "M月D日" : "D" ; //月初めだけ、月情報を記載
  
  //当日かどうかの判断//
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat);

  //今月以外をグレーダウン//
  const isCurrentMonth = day.month() === today.month();
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

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
    </div>
  );
};

export default CalendarElement;