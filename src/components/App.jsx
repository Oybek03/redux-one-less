import React,{useState} from "react";
import Accordion from "./Accordion";

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

const App = () => {
  return <Accordion data={dataAccordion} />;
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
