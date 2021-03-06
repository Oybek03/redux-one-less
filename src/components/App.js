import { compose,createStore } from "redux";
import React from "react";

const App = () => {
  const initialState = [];
  const qush = (val) => {
    return val + 5;
  };
  const ayir = (val) => {
    return val - 1;
  };
  const kupay = (val) => {
    return val * 5;
  };
  const natija =compose(ayir, qush, kupay);
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
  const store = createStore(dos);
  const app = store.dispatch(personAction("jafar", 8));
  console.log(app);

  const action2 = (price, color) => {
    return {
      type: "CAR",
      payload: {
        price: price,
        color: color,
      },
    };
  };
  const reducer2 = (state = initialState, action) => {
    if (action.type === "CAR") {
      return [...state, action.payload];
    }
    return state;
  };
  const store1 =createStore(reducer2);
  const app1 = store1.dispatch(action2("malibu", "black"));
  console.log(app1);
};
export default App;
