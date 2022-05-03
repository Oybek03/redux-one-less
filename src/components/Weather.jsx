import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "../Style.css";
const Weather = () => {
  const [kalit, setKalit] = useState();
  const [input, setInput] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [shaxar, setShaxar] = useState("");

  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const API_Key = "10c9febc354435ffc3d32e3a73e7e009";
  const event = (e) => {
    setInput(e.target.value);
  };
  // event();
  let temp;
  let city;
  useEffect(() => {
    const getData = async (query) => {
      const { data } = await axios.get(URL, {
        params: {
          q: input,
          units: "metric",
          APPID: API_Key,
        },
      });
      console.log();
      setTemperatura(data.main.temp);
      setShaxar(data.name);
    };
    getData();
  }, [input]);
  console.log(kalit);

  return (
    <div>
      <div className="ui category search">
        <form className="ui icon input container" style={{ marginTop: "25px" }}>
          <input
            onSubmit={event}
            className="prompt"
            type="text"
            placeholder="Search animals..."
            style={{ width: "1000px" }}
          />
          <i className="search icon"></i>
        </form>
        <div className="results"></div>
      </div>

      <p style={{ color: "#8E3200", textAlign: "center", fontSize: "44px" }}>
        {shaxar}
      </p>
      <div className="big-container">
        <div className="img-container">
          <img
            src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="weather-title">
            <h1 className="harorat">
              {temperatura} °C
              <i className="ui icon cloud"></i>
            </h1>
            {/* <sup>02.05.2022</sup> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;

//////////////////
