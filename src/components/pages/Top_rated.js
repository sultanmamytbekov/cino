import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_REY";
import Populardt from "./Popular-dt";

function Rated() {
  const [reted, setReted] = useState([]);
  function getRated() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setReted(res.data.results);
      });
  }
  useEffect(() => {
    getRated();
  }, []);
  console.log(reted);
  return (
    <div id="rated">
      <div className="continer">
        <div  className="rated">
        {reted.map(el => <Populardt element={el}/>)}
        </div>
      </div>
    </div>
  );
}

export default Rated;
