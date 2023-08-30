import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./pages/API_REY";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import img from "../img/lol.svg";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};
function HomePopular() {
  const [popular, setPopular] = useState([]);
  function getPopular() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setPopular(res.data.results);
      });
  }
  useEffect(() => {
    getPopular();
  });
  return (
    <div style={{ background: `url(${img})` }}>
      <Slider {...settings}>
        {popular.map((el) => (
          <NavLink to={`/movie/movie-info/${el.id}`}>
            <div>
              <img
                style={{ borderRadius: "20px", width: "200px" }}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                alt=""
              />
              <div
                className="krug"
                style={{
                  background: `conic-gradient(#172fc7 ${
                    Math.round(el.vote_average * 10) * 3.59
                  }deg, #253625 0deg)`,
                }}
              >
                <h5 className="krug--h5">
                  <sup>{Math.round(el.vote_average * 10)}%</sup>
                </h5>
              </div>
            </div>
          </NavLink>
        ))}
      </Slider>
    </div>
  );
}

export default HomePopular;
