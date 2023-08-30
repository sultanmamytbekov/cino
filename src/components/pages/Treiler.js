import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "./API_REY";
import { useParams } from "react-router-dom";
import Slider from "react-slick";


const Treiler = () => {
  const [treiler, setTreiler] = useState([]);
  const { movieId } = useParams();
  function getTreiler() {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    ).then((res) => {
      setTreiler(res.data.results);
    });
  }
  useEffect(() => {
    getTreiler();
  }, []);
  return (
    <div className="container" style={{ display: "flex" , justifyContent:'center' }}>
        
            {treiler.slice(0, 1).map((el) => (
          <div style={{marginBottom:'100px', marginTop:'100px'}}>
            <center><h1>treiler</h1></center>
            <iframe
              width="660"
              height="415"
              src={`https://www.youtube.com/embed/${el.key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            ;
          </div>
        ))}
        
    </div>
  );
};

export default Treiler;
