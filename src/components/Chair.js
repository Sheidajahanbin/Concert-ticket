import React from "react";
import style from "../styles/style.module.css";

const Chair = ({chairinfo, key }) => {
  return (
    <>
      <button className={style["btn-Chair"]}>
        {chairinfo.number}<div className={style["tietle-price"]}>
        {chairinfo.price}  </div></button>
    </>
  );
};

export default Chair;
