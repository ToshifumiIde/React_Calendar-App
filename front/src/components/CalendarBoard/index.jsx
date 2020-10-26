import React from "react";
import { GridList } from '@material-ui/core';
import CalenderElement from "../CalendarElement";
import  {createCalendar } from "../../services/calendar";
import * as styles from "./style.css";

const calendar = createCalendar();

const CalendarBoard = () => {
  return (
    <div className= {styles.container} >
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalenderElement>
              {c.format("D")}
            </CalenderElement>
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;