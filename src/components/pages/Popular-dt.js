import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Slider from "react-slick";



const Populardt = ({ element, color }) => {

  
  


  return (
    <NavLink to={`/movie/movie-info/${element.id}`}>
      <div className="HELLO">
        <centre>
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${element.poster_path}`}
            alt=""
          />
        </centre>
        <center>
          <h5 style={{color: 'black'}}>{element.title}</h5>
        </center>
      </div>
    </NavLink>
  );
};

export default Populardt;
