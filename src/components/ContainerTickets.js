import React, { useEffect, useReducer } from "react";
import Stage from "./Stage";
import style from "../styles/style.module.css";
import axios from "axios";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompA";
import CompD from "./CompA";
import Chairs from "./Chairs";

const initState = {
  chairs: [],
  chairA:[],
  chairB:[],
  chairC:[],
  chairD:[],
  errorMassage: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return { ...state, chairs: action.postInfo,};
    case "fail":
      return { ...state, errorMassage: action.error };
    default:
      return state;
  }
};
const ContainerTicket = () => {
  const [data, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    axios
      .get("/chairs.json")
      .then((response) =>
        dispatch({ type: "success", postInfo: response.data })
      )
      .catch((error) => dispatch({ type: "fail", error: error.message }));
  }, [
    // () =>data.chairs.map((chair)=>{
    // if(chair.section ==="A"){
    //   return chair.section
    // }
    
  ]);
  return (
    <div>
      <Stage />

      <div className={style["btn-CountSum"]}>
        <button className={style["btn-count"]}>count :</button>
        <button className={style["btn-sum"]}>sum :</button>
      </div>
      <div className={style["chair-flex"]}>
        {data.errorMassage ? (
          <h3>{data.errorMassage}</h3>
        ) : (
          data.chairs.map((chair) => <Chairs {...chair}/>
         
        ))}
      </div>
    </div>
  );
};

export default ContainerTicket;
