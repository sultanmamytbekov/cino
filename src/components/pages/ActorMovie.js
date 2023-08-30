import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from './API_REY';
import { NavLink, useParams } from 'react-router-dom';
import Slider from 'react-slick';


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
const ActorMovie = () => {
    const[actor, setActor] = useState([])
    const {person_id} = useParams()
    function getActorMovie(){
        axios(`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${API_KEY}&language=en-US`)
        .then(res => {
            setActor(res.data.cast)
        })

    }
    useEffect(() =>{
        getActorMovie()
    }, [])
  
    return (
        <div id="actorMovie">
            <div className="container">
                <div className="actorMovie">
                    <Slider {...settings}>
                    {actor.map(el => (
                        <NavLink to={`/movie/movie-info/${el.id}`}>
                            <div>
                            <div style={{width:'150px' }}>
                            <img style={{borderRadius:'10px'}} src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${el.poster_path}`} alt="" />
                            <h5 style={{textAlign:'center'}}>{el.title}</h5>
                            </div>
                        </div>
                        </NavLink>                        
                    ))

                    }
                    
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ActorMovie;