import React from "react";
import house from "./Data";

const House = (props) => {
  return (
    <div className="house">
      <div className="houseImg">
        <img src={[house[props.index].profilePic]} alt="" />
      </div>

      <div className="houseInfo">
        <h3>{house[props.index].name}</h3>
        <p>{house[props.index].address}</p>
        <p>{house[props.index].rigs}</p>
      </div>
    </div>
  );
};

export default house;
