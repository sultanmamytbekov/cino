import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_REY";
import Populardt from './Popular-dt';



const Now_playing = () => {
    const [playing, setPlaying] = useState([]);
  function getPlaying() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setPlaying(res.data.results);
      });
  }
  useEffect(() => {
    getPlaying();
  }, []);
    return (
        <div id="rated">
      <div className="continer">
        <div className="rated">
        {playing.map(el =>  <Populardt element={el}/>)}
        
        </div>
      </div>
    </div>
    );
};

export default Now_playing;