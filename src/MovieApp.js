import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import MovieData from './Movie.component';
import MoreInfo from './MovieMoreInfo';
import axios from 'axios';
import React from "react";
import { useState, useEffect, useRef } from "react";
import './index.css'

const MovieApp = () => {

   const [search, setSearch] = useState('')
   const [timeoutId, updateTimeoutId] = useState()
   const [movieList, updateMovieList] = useState() //Movie list (items)
   const [movieInfo, updateMovieInfo] = useState(null) //movie info

   const api_key = "a1f937e9";
   const getMovieData = async (searchString) => {
    
        const response = await axios.get(
            `http://www.omdbapi.com/?s=${searchString}&apikey=${api_key}`
        );
        console.log(response)
        updateMovieList(response.data.Search)
        
    }
    

   const textChange = (e) => {
     setSearch(e.target.value)
     clearTimeout(timeoutId)
     const timeout = setTimeout(() => getMovieData(e.target.value), 500)
     updateTimeoutId(timeout) 
     /*this code will run the api called text when you are done writing 
     in your input, we also have a clearTimeout to clear it,
     use setTimeOut instead of setInterval, setInteval is infinite loop*/
   }

   

    return(
        <header>
            <div className="header-page">

                <div className='search-box'>
                <FontAwesomeIcon icon={faSearch}  />
                <input 
                className='input-search' 
                placeholder='search...' 
                type='text'
                value={search}
                onChange={textChange}
                ></input>
                </div>
            </div>

            {movieInfo && <MoreInfo movieInfo={movieInfo} />}

            <div className='movie-List-Container'>
                {movieList?.length ? 
                movieList.map((movie, index) => <MovieData key={index} movie={movie} updateMovieInfo={updateMovieInfo}/> )
                : "No Movie Data"
                }
                
            </div>
        </header>
    )
}

export default MovieApp;