import React from "react";
import style from "../styles/style.module.css";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompB";
import CompD from "./CompB";

const Chairs = (chair) => {
    const [data,dispatch] =chair
  return (
    <>
     
    <div className={style["chair"]}>{chair.section}</div>
    <CompA/>
    <CompB/>
    <CompC/>
    <CompD/>
    </>
  );
};

export default Chairs;
