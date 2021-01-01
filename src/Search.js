import React, { Component } from "react";

export default class Search extends Component {
  change() {
    //Update the list.
    console.log("I got a click");
    return;
  }

  render() {
    return (
      <div>
        <button id="change" onClick={this.change}>
          Change
        </button>
      </div>
    );
  }
}
