import React from "react";
import { ReactDOM } from "react-dom";

let oy = function () {
  return new Date().getMonth();
};

const DisplaySeason = (props) => {
  if (props.lat > 0 && oy() > 2 && oy() < 9) {
    return (
      <div className="first-div">
        <div className="second-div">
          <i className="sun icon one"></i>
          Let's hit the beach!
          <i className="sun icon two"></i>
        </div>
      </div>
    );
  } else {
    return (
      <div className="first-div">
        <div className="second-div">
          <i className="snowflake icon one"></i>
          Burr,it's chilly!
          <i className="snowflake icon two"></i>
        </div>
      </div>
    );
  }
};

export default DisplaySeason;
