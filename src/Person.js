import React from "react";
import house from "./Data";

const person = (props) => {
  return (
    <div className="house">
      <div className="houseImg">
        <img src={[house[props.index].profilePic]} alt="" />
      </div>
      <h3>I'm {house[props.index].name}</h3>
      <p>{house[props.index].address}</p>
      <p>{house[props.index].rigs}</p>
    </div>
  );
};

export default person;
