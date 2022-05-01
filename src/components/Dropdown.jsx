import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props) => {
  // const [inputValue, setInputValue] = useState("");
  // const count = useRef(0);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={inputValue}
  //       onChange={(e) => setInputValue(e.target.value)}
  //     />
  //     <h1>Render Count: {count.current}</h1>
  //   </>
  // );

  ////////////
  const [selection, setSelection] = useState(props.data[0]);
  const [check, setCheck] = useState(true);
  const renderData = () => {
    return props.data.map((val) => {
      if (val.value === selection.value) {
        return;
      }
      return (
        <div
          onClick={() => {
            setSelection(val);
          }}
          className="item"
          data-value="jenny"
        >
          {val.label}
        </div>
      );
    });
  };
  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      if (e.target == ref.current) {
        return;
      }
      setCheck(false);
    });
  });
  useEffect(() => {
    props.getData(selection);
  }, [selection]);
  console.log(selection);
  const ref = useRef();
  console.log(ref);

  return (
    <div className="ui container">
      <h1>{props.label}</h1>
      <div
        ref={ref}
        onClick={() => {
          setCheck(!check);
        }}
        className={`ui fluid selection dropdown ${
          check ? "active visible" : ""
        }`}
      >
        <input type="text" name="user" />
        <i className="dropdown icon"></i>
        <div className="default text">{selection.label}</div>
        <div className={`menu ${check ? "transition visible" : ""}`}>
          {renderData()}
        </div>
      </div>
      <h1>OutPut:   {props.chiqarish}</h1>
    </div>
  );
  ////////////////
};
export default Dropdown;
