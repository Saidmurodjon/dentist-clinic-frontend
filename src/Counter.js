import React from "react";
import { inc, dec } from "./../redux/action";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
  const counter = useSelector((state) => state.value);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <button onClick={() => dispatch(dec())} className="btn btn-danger m-3">
        DEC
      </button>
      <h1 className="text d-inline m-3">{counter}</h1>
      <button onClick={() => dispatch(inc())} className="btn btn-primary m-3">
        INC
      </button>
    </div>
  );
}

export default Counter;
