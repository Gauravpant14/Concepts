import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {counterAction} from "../redux/index";

const UseSel = () => {
  const state1 = useSelector((state) => state);
  
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Using UseSelector and UseDispatch </h1>
      <h2>Count {state1}</h2>
      <button onClick={() => dispatch(counterAction())} >Click</button> {/*while using dispatch you have to use it with a function*/}
    </div>
  );
};

export default UseSel;
