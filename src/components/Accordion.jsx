import React, { useState } from "react";

const Accordion = (props) => {
  const [index, setIndex] = useState(1);

  if (index == 1) {
    setIndex(7);
  }
  console.log(index);
  const dataRender = () => {
    return props.data.map((val, index) => {
      return (
        <div key={index}>
          <div className="ui styled accordion">
            <div className="title active">
              <i className="dropdown icon"></i>
              {val.savol}
            </div>
            <div className="content active">
              <p
                className="transition visible"
                style={{ display: "block !important" }}
              >
                {val.javob}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div>{dataRender()}</div>;
};

export default Accordion;
