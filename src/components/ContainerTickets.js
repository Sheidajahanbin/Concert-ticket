import React, { useEffect, useReducer } from "react";
import Stage from "./Stage";
import style from "../styles/style.module.css";
import axios from "axios";
import Chair from "./Chair";
// import CompB from "./CompB";
// import CompC from "./Chair";
// import CompD from "./Chair";
// import Chairs from "./Tickets";
// import Tickets from "./Tickets";

const initState = {
  chairs: [],

  errorMassage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return { ...state, chairs: action.postInfo };
    case "fail":
      return { ...state, errorMassage: action.error };
    default:
      return state;
  }
};
const ContainerTicket = () => {
  const [data, dispatch] = useReducer(reducer, initState);
  const temp = [];
  useEffect(() => {
    axios
      .get("/chairs.json")
      .then((response) =>
        dispatch({ type: "success", postInfo: response.data })
      )

      .catch((error) => dispatch({ type: "fail", error: error.message }));
  }, []);
  console.log(data.chairs);
  return (
    <>
      <Stage />

      <div className={style["btn-CountSum"]}>
        <button className={style["btn-count"]}>count :</button>
        <button className={style["btn-sum"]}>sum :</button>
      </div>
      <div className={style["chair-flex"]}>
        <div className={style["chair-A"]}>
          {data.errorMassage ? (
            <h3>{data.errorMassage}</h3>
          ) : (
            data.chairs
              .filter((chair) => chair.section === "A")
              .map((chair) => <Chair key={chair.number} chairinfo={chair} />)
          )}{" "}
        </div>
        <div className={style["chair-B"]}>
          {data.errorMassage ? (
            <h3>{data.errorMassage}</h3>
          ) : (
            data.chairs
              .filter((chair) => chair.section === "B")
              .map((chair) => <Chair  key={chair.number} chairinfo={chair} />)
          )}{" "}
        </div>
        <div className={style["chair-C"]}>
          {data.errorMassage ? (
            <h3>{data.errorMassage}</h3>
          ) : (
            data.chairs
              .filter((chair) => chair.section === "C")
              .map((chair) => <Chair key={chair.number} chairinfo={chair} />)
          )}{" "}
        </div>
        <div className={style["chair-D"]}>
          {data.errorMassage ? (
            <h3>{data.errorMassage}</h3>
          ) : (
            data.chairs
              .filter((chair) => chair.section === "D")
              .map((chair) => <Chair key={chair.number} chairinfo={chair}/>)
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default ContainerTicket;
