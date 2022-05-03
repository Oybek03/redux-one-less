import React from "react";
const Header = () => {
  return (
    <div>
      <div className="ui pointing menu">
        <a href="/" className=" item">
          Accordion
        </a>
        <a href="/dropdown" className="item">
          DropDown
        </a>
        <a href="/search" className="item">
          Search
        </a>
        <a href="/translate" className="item">
          Translate
        </a>
        <a href="/weather" className="item">
          Weather
        </a>
        {/* <a href="/youtube" className="item">
          Youtube
        </a> */}
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
