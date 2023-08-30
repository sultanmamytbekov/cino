import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_REY";
import Populardt from './Popular-dt';



const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([]);
  function getUpcoming() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setUpcoming(res.data.results);
      });
  }
  useEffect(() => {
    getUpcoming();
  }, []);
    return (
        <div id="rated">
      <div className="continer">
        <div className="rated">
        {upcoming.map(el => <Populardt element={el}/>)}
        </div>
      </div>
    </div>
    );
};

export default Upcoming;