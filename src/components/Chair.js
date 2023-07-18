import React from "react";
import style from "../styles/style.module.css";
import { useReducer } from "react";
import { click } from "@testing-library/user-event/dist/click";
const initState2 = {
  number: 0,
  click: 0,
  state: "",
};
const reducer = (state, action) => {
  switch (action.click) {
    case 0:
      return {
        ...state,
        click: action.click + 1,
        state: "level1",
      };

    case 1:
      return {
        ...state,
        click: action.click + 1,
        state: "level2",
      };

    case 2:
      return {
        ...state,
        click: action.click + 1,
        state: "level3",
      };
    default:
      return state;
  }
};

const Chair = ({ chairinfo, sumPrice, sumReserv }) => {
  const [set, dispach] = useReducer(reducer, initState2);
  const reserHandler = () => {
    if (set.click < 3) {
      dispach({ click: set.click });
    } else {
      alert("این صندلی قبلا رزرو شده است!");
    }
    if (set.click === 2) {
      // // sumReserv((prvenumber) => prvenumber + 1);
      // dispach({click:2 ,sumPrice:chairinfo.price}) ;
    }
  };
  return (
    <>
      <button className={style[`btn-Chair${set.state}`]} onClick={reserHandler}>
        {chairinfo.number}
        <div className={style["tietle-price"]}>{chairinfo.price} </div>
      </button>
    </>
  );
};

export default Chair;
