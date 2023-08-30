import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "./API_REY";
import Actors from "./Actors";
import Treiler from "./Treiler";
import Home from "./Home";
import HomePopular from "../Homepopular";

const DetailPage = () => {
  const [detailPage, setDetailPage] = useState({});
  const arr = [];
  const { movieId } = useParams();

  const getDetailPage = () => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    ).then((res) => {
      setDetailPage(res.data);
      console.log(res);
    });
  };

  useEffect(() => {
    getDetailPage();
  }, []);

  let {
    title,
    poster_path,
    backdrop_path,
    overview,
    runtime,
    vote_average,
    id,
    tagline,
    release_date,
  } = detailPage;

  return (
    <>
      <div
        id="detail"
        style={{
          background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat left/cover`,
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <div className="container">
          <div className="detail">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
              width={340}
              alt="img"
            />
            <div className="detail--block">
              <h1>{title}</h1>
              <div className="detail--block__group" style={{ display: "flex" }}>
                <p>{release_date}/</p>
              </div>
              <div className="detail--block__reiting">
                <div
                  className="detail--block__reiting--krug"
                  style={{
                    background: `conic-gradient(#172fc7 ${
                      Math.round(vote_average * 10) * 3.59
                    }deg, #253625 0deg)`,
                  }}
                >
                  <h5 className="detail--block__reiting--krug__h5">
                    <sup>{Math.round(vote_average * 10)}%</sup>
                  </h5>
                </div>

                <h3>Рейтинг</h3>
              </div>
              <div className="detail--block__info">
                <h3>" {tagline}"</h3>
                <h1>Обзор</h1>
                <h2>{overview}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Actors />
      </div>
      <Treiler />
      {/* <HomePopular hello={vote_average} /> */}
    </>
  );
};

export default DetailPage;
