import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import axios from "axios";
import Translate from "./Translate";
const dataAccordion = [
  {
    savol:
      "Daraxtning shoxida qarg’a o’tiribdi. Qarg’ani cho’chitib yubormasdan shoxni arralash uchun nima qilish kerak?",
    javob: "Qarg’aning o’zi uchib ketishini kutish",
  },
  {
    savol:
      "Undan qanchalik ko’p olaversangiz, u shunchalik kattalashib boraveradi. U nima?",
    javob: "Chuqur",
  },
  {
    savol:
      "Qafasda 3 ta quyon bor edi. Uchta qizcha ularga bittadan quyon berishlarini so’rashdi. Ularga so’raganlaridek bittadan quyon berildi. Lekin baribir qafasda bitta quyon qoldi. Buni qanday tushuntirish mumkin?",
    javob: "Qizchalarning biriga quyon qafasi bilan birga berilgan",
  },
  {
    savol: "Kichkina, kulranggina, filga o’xshaydi.",
    javob: "Filning bolasi.",
  },

  {
    savol:
      "Shifokor bemorga 30 daqiqa oraliq bilan 3 ta ukol olishni belgiladi. Hamshira ukol qilishni soat 10:30 da boshlasa, bemor soat nechida ukollarni to’liq olib bo’ladi?",
    javob:
      "Soat 11:30 da, birinchisi 10:30 da, ikkinchisi 11:00 da, uchinchisi esa 11:30 da.",
  },
  {
    savol:
      "O’rdaklar suv ichishga qator bo’lib ketayotgan edi. O’rdaklardan biri oldinga qarab, 17 ta boshni ko’rdi. Ortiga qarasa — 42 ta panja kelayotgan ekan. Jami nechta o’rdak suv ichishga ketmoqda?",
    javob:
      "Javob: 39 ta. Oldinda 17 ta o’rdak. Ortida esa 21 ta. Shuningdek boshini orqa-oldinga burgan o’rdakning o’zi ham.",
  },
  {
    savol:
      "Qanday holatda 3 ta yosh bola, 4 ta katta yoshli odam, 1 ta mushuk va 1 ta it bittagina soyabon tagida turib, yomg’ir ostida nam bo’lmaydi?",
    javob: "Yomg’ir yog’mayotgan bo’lsa",
  },
];

const dataDropdown = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color blue",
    value: "blue",
  },
  {
    label: "The color orange",
    value: "orange",
  },
  {
    label: "The color gray",
    value: "gray",
  },
];
let b;
const olish = async (arg) => {
  const data = await axios.get("https://en.wikipedia.org/w/api.php?", {
    params: {
      action: "query",
      list: "search",
      format: "json",
      origin: "*",
      srsearch: arg,
    },
  });

  // setResults(data.data.query.search);
  let mal = data.data.query.search;
  console.log(mal);
  return { mal };
};
const getDropdown = function (e) {
  console.log(e);
};
const router = () => {
  if (window.location.pathname === "/search") {
    return <Search olibKel={olish} />;
  } else if (window.location.pathname === "/accordion") {
    return <Accordion data={dataAccordion} />;
  } else if (window.location.pathname === "/translate") {
    return <Translate />;
  } else if (window.location.pathname === "/dropdown") {
    return (
      <Dropdown
        data={dataDropdown}
        getData={getDropdown}
        label="Translate to"
        // chiqarish={result}
      />
    );
  }
};
const App = () => {
  return (
    <div>
      <div className="ui pointing menu">
        <a href="/" className="active item">
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
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment">
        <p>{router()}</p>
      </div>
    </div>
  );
  // return <Translate />;
  // return <Dropdown data={dataDropdown} />;
  // return <Search olibKel={olish} />;
  // return <Accordion data={dataAccordion} />;
};

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: null,
//     };
//   }
//   getIndex = (key1) => {
//     this.setState({ index: key1 });
//   };

//   renderData() {
//     return data.map((val, key) => {
//       let active;
//       if (this.state.index == key) {
//         active = "active";
//       }
//       return (
//         <div>
//           <div className="ui inverted segment">
//             <div className="ui inverted accordion">
//               <div
//                 className={"title " + active}
//                 onClick={() => {
//                   return this.getIndex(key);
//                 }}
//               >
//                 <i className="dropdown icon"></i>
//                 <h3 style={{ color: "green" }}> {val.savol}</h3>
//               </div>
//               <div className={"content " + active}>
//                 <p className="transition">{val.javob}</p>
//               </div>
//             </div>
//           </div>
//           {/* <div className="ui styled accordion">
//               <div
//                 className={"title " + active}
//                 onClick={() => {
//                   return this.getIndex(key);
//                 }}
//               >
//                 <i className="dropdown icon"></i>
//                 {val.savol}
//               </div>
//               <div className={"content " + active}>
//                 <p
//                   className="transition visible"
//                   style={{ display: "block !important" }}
//                 >
//                   {val.javob}
//                 </p>
//               </div>
//             </div> */}
//         </div>
//       );
//     });
//   }
//   render() {
//     return <div>{this.renderData()}</div>;
//   }
// }
