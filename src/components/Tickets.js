import React, { useEffect, useReducer } from "react";
import style from "../styles/style.module.css";
import Chair from "./Chair";
// import CompB from "./CompB";
// import CompC from "./CompB";
// import CompD from "./CompB";

const Tickets = () => {
 
  return (
    <div className={style["chair-flex"]}>
      <Chair />
      <Chair />
      <Chair />
      <Chair />
    </div>
  );
};

export default Tickets;
