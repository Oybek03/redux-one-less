import { compose } from "redux";
import React from "react";

const App = () => {
  console.clear();

  const qush = (val) => {
    return val + 5;
  };
  const ayir = (val) => {
    return val - 1;
  };
  const kupay = (val) => {
    return val * 5;
  };
  const natija = Redux.compose(ayir, qush, kupay);
  console.log(natija(10));
  //////

  const typeone = "DEL";
  const personAction = (name, age) => {
    return {
      type: typeone,
      payload: {
        name: name,
        age: age,
      },
    };
  };

  const dos = (state = [], action) => {
    if (action.type === "ADD") {
      return [...state, action.payload];
    } else if (action.type === "DEL") {
      return [...state];
    }
    return state;
  };
  const store = Redux.createStore(dos);
  const app = store.dispatch(personAction("jafar", 8));
  console.log(app);
};
export default App;
