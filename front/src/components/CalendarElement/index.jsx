import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";

const CalendarElement = ({ day }) =>{
  const isFirstDay = day.date() === 1; //文字列のフォーマットの設定
  const format = isFirstDay ? "M月D日" : "D" ; //月初めだけ、月情報を記載
  return (
    <div className={styles.element}>
      <Typography 
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
        >
    { day.format(format) }
      </Typography>
    </div>
  );
};

export default CalendarElement;