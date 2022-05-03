import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "../Style.css";
const Weather = () => {
  const [kalit, setKalit] = useState("tashkent");

  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const API_Key = "10c9febc354435ffc3d32e3a73e7e009";
  useEffect(() => {
    const getData = async (query) => {
      const { data } = await axios.get(URL, {
        params: {
          q: kalit,
          units: "metric",
          APPID: API_Key,
        },
      });

      console.log(data);
    };
    getData();
  }, [kalit]);

  // console.log(lat);
  return (
    <div>
      <h1 style={{ color: "#8E3200", textAlign: "center", fontSize: "44px" }}>
        Weather
      </h1>
      <div className="big-container">
        <div className="img-container">
          <img
            src="https://media.istockphoto.com/photos/tashkent-tv-tower-aerial-shot-during-sunset-in-uzbekistan-picture-id1034587098?b=1&k=20&m=1034587098&s=170667a&w=0&h=aXDFrnDzfO8-lIYome0of7ydsmlh1zJZN2cWo2_vWF4="
            alt=""
          />
          <div className="weather-title">
            <h1 className="harorat">
              °C Tashkent <i className="ui icon cloud"></i>
            </h1>
            <sup>02.05.2022</sup>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://images.unsplash.com/photo-1622030797403-fa221ce5d208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFzaGtlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="weather-title">
            <h1 className="harorat">
              16°C Tashkent <i className="ui icon cloud"></i>
            </h1>
            <sup>03.05.2022</sup>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://images.unsplash.com/photo-1589652135584-6c7347affa65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRhc2hrZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="weather-title">
            <h1 className="harorat">
              16°C Tashkent <i className="ui icon cloud"></i>
            </h1>
            <sup>04.05.2022</sup>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://images.unsplash.com/photo-1553193094-cd864db6d7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRhc2hrZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="weather-title">
            <h1 className="harorat">
              16°C Tashkent <i className="ui icon cloud"></i>
            </h1>
            <sup>05.05.2022</sup>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;

//////////////////
// const options = {
//   method: "GET",
//   url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly",
//   params: { lat: "35.5", lon: "-78.5" },
//   headers: {
//     "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
//     "X-RapidAPI-Key": "93cc493846mshae65c31d1500471p13b722jsn3452235c9618",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
