import React, { useEffect, useState } from "react";
import axios from "axios";
const Search = (props) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const changeTerm = (e) => [setTerm(e.target.value)];

  console.log(term);
  useEffect(() => {
    const getData = async (key) => {
      const dos = await props.olibKel(key);
    };
    console.log(term);
    const kut = async () => {
      let a = await props.olibKel(term);
      console.log(a.mal);
      setResults(a.mal);
    };
    kut();

    const timer = setTimeout(() => {
      if (term) {
        getData(term);
      } else if (!term && results.length) {
        setResults([]);
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [term]);

  const renderResaults = () => {
    return results.map((val) => {
      return (
        <div className="ui message" key={val.pageid}>
          <div className="header">{val.title}</div>
          <p dangerouslySetInnerHTML={{ __html: val.snippet }}></p>
          <a
            className="button ui green"
            href={`https://en.wikipedia.org/wiki?curid=${val.pageid}`}
          >
            Go Page
          </a>
        </div>
      );
    });
  };
  return (
    <div className="ui container" style={{ marginTop: "40px" }}>
      <div className="ui input" style={{ width: "100%" }}>
        <input
          onChange={changeTerm}
          type="text"
          placeholder="Search..."
          value={term}
        />
      </div>

      <div style={{ marginTop: "20px" }}>{renderResaults()}</div>
    </div>
  );
};

export default Search;
