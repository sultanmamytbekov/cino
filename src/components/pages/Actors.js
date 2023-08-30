import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from './API_REY';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import ActorsDetail from './ActorsDetail';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

const Actors = () => {
    const [actors , setActors] = useState([])
    const { movieId } = useParams();

    function getActors(){
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        .then(res => {
            setActors(res.data.cast)
        })
    }
    useEffect(() => {
        getActors()
    }, [])
    return (
        <div id="actors">
            <div className="container">
                <div className="actors">
                    <Slider {...settings}>
                    {actors.map(el => (
                        <ActorsDetail hello={el}/>
                    ))
                    }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Actors;