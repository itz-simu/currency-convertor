// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//     const [from , setFrom] = useState("use");
//     const [to , setTo] = useState("inr");
//     const [selectedamount , setSelectedamount] = useState(1);
//     const [converted ,setConverted] = useState(84.34);
//     const [currencies , setCurrencies] = useState([]);
//     const [data2 , setData2] = useState({})
    
//     useEffect(() => {
//          fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currencyapi@latest/v1/currencies/${from}.json`)
//          .then((resonse)=>{
//          return response.json();
//          })
//          .then((data) => {
//          let selected = Object.keys(data);
//          let curen = data[selected[1]];
//          setData2(curen)
//          let arr = Object.keys(curen);
//          console.log(arr);
//          setCurrencies(arr);
//          });
//         }, [from]);
        
//          console.log("helo");

        
//          function convert() {
//         console.log("convert");
//         console.log(Data2[to])
//         let output = selectedamount*data2[to]
//         setConverted(output)
//         }
         
//         return (
//             <>
//             <div className= "h-screen bg-slate-900">
//              <div className="w-300px br-white">
//               <div>

//                 {" "}
//                 <input type="text" className="border" value={selectedamount} onChange={(e) =>setSelectedamount(e.target.value)}/>{" "}
//                 <select name="" id="" value={from} onChange={(e) => setFrom(e.target.value)}>
//                     {currencies.map((item) => {
//                         return (
//                         <Option value={item} key={item}>{item}</Option>);
//                     })}
//                 </select>

//                 </div> 
//                 <div>
//                  {" "} 
//                  <input type="text"  readOnly value={converted} />{" "}
//                  <select  name="" value={to} onChange={(e) => setTo(e.target.value)}>
//                    {currencies.map((item) =>{
//                     return (
//                         <option value={item} key={item}>{item} 
//                         </option>
//                     );
//                    })} 
//                    </select>
//                     </div> 
//                     <div>
//                     <button onClick={convert}>convert</button>   
//                     </div> 
//                 </div>   
//             </div>
            
            
//             </>
//         );

//     }
// export default App
import { useState } from "react"; 
import { useEffect } from "react"; 
 
function App() { 
  const [from, setFrom] = useState("usd"); 
  const [to, setTo] = useState("inr"); 
  const [selectedamount, setSelected] = useState(1); 
  const [converted, setConverted] = useState(84.34); 
  const [currencies, setCurrency] = useState([]); 
  const [data2, setData2] = useState({}); 
 
  useEffect(() => { 
    fetch( `
      https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json `
    ) 
      .then((response) => { 
        return response.json(); 
      }) 
      .then((data) => { 
        let selected = Object.keys(data); 
        let curen = data[selected[1]]; 
        setData2(curen); 
        let arr = Object.keys(curen); 
        console.log(arr); 
        setCurrency(arr); 
      }); 
  }, [from]); 
 
  console.log("helo"); 
 
  function convert() { 
    console.log("convert"); 
    console.log(data2[to]); 
    let output = selectedamount * data2[to]; 
    setConverted(output); 
  } 
  return ( 
    <> 
     
      <div className="max-w-lg mx-auto p-6 min-h-screen flex items-center justify-center
       bg-cover bg-no-repeat bg-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63UUTqYF1d_akVsDYcqvKTh_-4VItV0gQbg&s)] shadow-md rounded-lg"> 
          
      <div className="text-2xl font-semibold text-center">
      <h1 className=" text-2xl font-bold ">currency convertor</h1>

        <div className="space-y-4">

            {" "} 
            <input 
              type="text" 
              className="border" 
              value={selectedamount} 
              onChange={(e) => setSelected(e.target.value)} 
            />{" "} 
            <select 
              name="" 
              id="" 
              value={from} 
              onChange={(e) => setFrom(e.target.value)} 
            > 
              {currencies.map((item) => { 
                return <option value={item} key={item}>{item}</option>; 
              })} 
            </select> 
          </div> 
          <div className="space-y-4"> 
            {" "} 
            <input type="text" readOnly value={converted} />{" "} 
            <select name="" value={to} onChange={(e) => setTo(e.target.value)}> 
              {currencies.map((item) => { 
                return ( 
                  <option value={item} key={item}> 
                    {item} 
                  </option> 
                ); 
              })} 
            </select> 
          </div> 
          <div class="flex items-center justify-center gap-4"> 
            <button onClick={convert} style={{ backgroundColor: 'rgb(255, 99, 71)' }} 
  className="text-white px-4 py-2 rounded"
> convert</button> 
          </div> 
        </div>  
      </div> 
   
    </> 
  ); 
} 
export default App;        