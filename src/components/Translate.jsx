import axios from "axios";
import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
const dataDropdown = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Uzbek",
    value: "uz",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];
const Translate = () => {
  const [term, setTerm] = useState("");
  const [translate, setTranslate] = useState("");
  const [result, setResult] = useState("");
  const getInputData = (e) => {
    setTerm(e.target.value);
  };
  const getDropdown = (data) => {
    setTranslate(data);
  };
  useEffect(() => {
    const getData = async () => {
      const data = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: term,
            target: translate.value,
            format: "text",
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setResult(data.data.data.translations[0].translatedText);
    };
    console.log(result);
    const timer = setTimeout(() => {
      if (term) {
        console.log("if");
        getData();
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [term, translate]);
  return (
    <div className="ui container">
      <h1>Translate App</h1>
      <form className="ui form">
        <div className="ui input focus" style={{ width: "50%" }}>
          <input onChange={getInputData} type="text" placeholder="Search..." />
        </div>
      </form>
      <Dropdown
        data={dataDropdown}
        getData={getDropdown}
        label="Translate to"
        chiqarish={result}
      />
    </div>
  );
};
export default Translate;
