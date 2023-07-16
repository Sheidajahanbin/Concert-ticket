import React from "react";
import style from "../styles/style.module.css";
import { useReducer } from "react";
const initState2 = {
  clickCunter: 0,
  reserv: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case 0:
      return { ...state, clickCunter: action.clickCunter + 1 };

    case 1:
      return { ...state, clickCunter: action.set.clickCunter + 1 };

    case 2:
      return { ...state, clickCunter: action.set.clickCunter + 1 };

    case 3:
      return { ...state, clickCunter: action.set.clickCunter + 1 };
    default:
      return state;
  }
};

const Chair = ({ chairinfo, sumPrice, sumReserv }) => {
  const [set, dispach] = useReducer(reducer, initState2);
  const reserHandler = () => {
  const btn= document.getElementsByTagName("button");
    if (set.clickCunter === 1) {
     btn.style.background="red";
    }
  };
  return (
    <>
      <button className={style["btn-Chair"]} onClick={reserHandler}>
        {chairinfo.number}
        <div className={style["tietle-price"]}>{chairinfo.price} </div>
      </button>
    </>
  );
};

export default Chair;
