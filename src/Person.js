import React from "react";
import house from "./Data";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./assets/img/houses", false, /\.(png|jpe?g|svg)$/)
);

const person = (props) => {
  return (
    <div className="house">
      <img src={images[0]} alt="" />
      <img src={images[house[props.index].profilePic]} />
      <div className="houseImg">
        <img src={images[props.index]} />
      </div>
      <h3>I'm {house[props.index].name}</h3>
      <p>{house[props.index].address}</p>
      <p>{house[props.index].rigs}</p>
    </div>
  );
};

export default person;
