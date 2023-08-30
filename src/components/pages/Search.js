import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from './API_REY';
import Populardt from './Popular-dt';




const Search = () => {
    const [searchh , setSearch] = useState([])
    const { movieName }  = useParams()
    function getSearch(){
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`)
        .then(res => {
            setSearch(res.data.results)
        })
    }
    useEffect(() => {
        getSearch()
    },[searchh])
    return (
        <div id="search">
            <div className="container">
                <div  style={{display : 'flex',flexWrap:'wrap'}} className="search">
                    {searchh.map(el => <Populardt element={el}/>)}
                </div>
            </div>
        </div>
    );
};

export default Search;