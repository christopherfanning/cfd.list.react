import React, { Component } from "react";
import house from "./Data";

export default class Search extends Component {
  search() {
    console.log("I got a click");
    let matches = [];
    let searchStr = document.getElementById("searchString").value;
    const regexp = new RegExp(searchStr, "i");
    console.log(searchStr);

    house.map((value, index) => {
      let searched = house[index].rigs.includes(searchStr);

      if (searched === true) {
        matches.push(index);
      }
      //   console.log(matches);
      return matches;
    });

    return;
  }

  render() {
    return (
      <div>
        <input id="searchString" type="text" placeholder="Enter Rig Number" />
        <button id="search" onClick={this.search}>
          Search
        </button>
      </div>
    );
  }
}
