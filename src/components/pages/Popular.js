import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_REY";
import Populardt from "./Popular-dt";
import img from "../../img/Arrow 2.svg"
import Home from "./Home";



function Popular() {
  const [popular, setPopular] = useState([]);
  const [popular1, setPopular1] = useState(1);
  const [popular2, setPopular2] = useState(9768);
  function getPopular() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${popular1}`
      )
      .then((res) => {
        setPopular(res.data.results);
      });
  }
  useEffect(() => {
    getPopular();
  });
  // console.log(popular);
  return (
    <div style={{margin:'50px 43px 1px 43px'}} id="popular">
      <div className="container">
        
        <div className="popular">
          {/* <Home popular={popular}/> */}
          {popular.map(el => <Populardt element={el}/>)}
          
        </div>
        
        <center><h1 style={{fontSize:'45px' , color:`#fe${popular2}`}}>{popular1}</h1></center>
        <div style={{display:'flex' ,justifyContent:'space-between'}}>
          
                    <div>
                    <button style={{display:popular1 === 1 ? 'none' : 'block' , background:`#d${popular2}f`}} onClick={() => {
                      setPopular2(popular2 - 152);
                        setPopular1(popular1 - 1)
                    }}> <img style={{rotate:'180deg', width:'70px' , height:'19px'}} src={img} alt="" /> </button> 
                    </div>  
                    <button style={{background:`#d${popular2}d`}} onClick={() => {
                      setPopular2(popular2 + 12);
                      setPopular1(popular1 + 1)
                    }}> <img style={{ width:'70px' , height:'19px'}} src={img} alt="" /> </button>
               </div>
      </div>
    </div>
  );
}
export default Popular;
