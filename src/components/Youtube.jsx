import React, { useEffect, useState } from "react";
import axios from "axios";

const Youtube = () => {
  const [state, setState] = useState("");
  const getData = async (kalitSuz) => {
    const key = "AIzaSyDXZdLg3XezWfbwftMKP7r2mJyzOf2AO1Q";
    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          typs: "video",
          maxResults: 10,
          key: key,
          q: kalitSuz,
        },
      }
    );

    setState(data);
    // console.log(state.data.items[0].snippet.thumbnails.default.url);
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  // console.log(state);
  getData("russian");

  // return (
  //   <div>
  //     <img src={state.data.items[0].snippet.thumbnails.default.url} alt="" />
  //   </div>
  // );
};
export default Youtube;

//////////////////
