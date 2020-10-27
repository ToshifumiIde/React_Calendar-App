import React from "react";
import * as styles from "./style.css";
import dayjs from "dayjs";
import { Typography } from "@material-ui/core";
import { isSameMonth , isFirstDay , isSameDay } from "../../services/calendar";

const CalendarElement = ( { day } ) =>{
  const today = dayjs();
  const isCurrentMonth = isSameMonth(day,today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
  const format = isFirstDay(day) ? "M月D日" : "D" ; //月初めだけ、月情報を記載
  const isToday = isSameDay(day,today); //当日かどうかの判定

  return (
    <div className={styles.element}>
      <Typography 
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
        >
          <span className={isToday ? styles.today : ""}>
            { day.format(format) }
          </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;