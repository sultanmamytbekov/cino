import React, { useEffect, useState } from "react";
import Rated from "./Top_rated";
import bg from "../../img/e3h0knvtz4qPg9dwYdWynALrW9s.jpg";
import HomePopular from "../Homepopular";
import { API_KEY } from "./API_REY";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import HomeRated from "./HomeRated";

const Home = () => {
  const [popular, setPopular] = useState([]);
  function
   getPopular() {
    axios 
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1}`
      )
      .then((res) => {
        setPopular(res.data.results);
        console.log(res);
      });
  }
  useEffect(() => {
    getPopular();
  }, []);

  const [value, setValue] = useState("");
  const [home, setHome] = useState(false);
  const state = Math.floor(Math.random() * 20);
  const nav = useNavigate();  
  const input = document.querySelector(".input");
  return (
    <div
      id="home"
      style={{
        background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${
          popular.map((el) => el.poster_path)[state]
        }") no-repeat left/cover`,
      }}
    >
      <div style={{ marginBottom: "150px" }} className="container">
        <div className="home">
          <div className="home--search">
            <h1>Добро пожаловать.</h1>
            <p>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</p>
            <input value={value}
              className="input"
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  nav(`/movieName/movieName-info/${value}`);
                  setValue('')
                }
              }}
              type="text"
              placeholder="Найти фильм, сериал, персону......"
            />
            <NavLink to={`/movieName/movieName-info/${value}`}>
              <button>Search</button>
            </NavLink>
          </div>
          <div className="home--text">
            <h1>В тренде</h1>
            <div className="home--text__btn">
              <button
                className="home--text__btn--1"
                onClick={() => setHome(false)}
              >
                Popular
              </button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: home ? "160px" : "110px",
                  height: "30px",
                  borderRadius: "15px",
                  background: "#060a84",
                  position: "absolute",
                  left: home ? "332px" : "222px",
                  transition: "1s",

                  // 222
                  // 382
                }}
              >
                <h4 style={{ color: "#17c78f" }}>
                  {home ? "Top Rated" : "Popular"}
                </h4>
              </div>
              <button
                className="home--text__btn--2"
                onClick={() => setHome(true)}
              >
                Top rated
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: home ? "none" : "block" }}>{<HomePopular />}</div>
      <div style={{ display: home ? "block" : "none" }}>{<HomeRated />}</div>
    </div>
  );
};

export default Home;
