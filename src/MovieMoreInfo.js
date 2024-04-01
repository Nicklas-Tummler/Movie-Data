import React from "react";
import { useEffect, useState } from "react";
import axois from "axios"

const MoreInfo = (props) => {
    const [selectedMovie, setSelectedMovie] = useState()
    const {movieInfo} = props;
    let api_key = "a1f937e9";
    useEffect(() => {
        axois.get(`http://www.omdbapi.com/?i=${movieInfo.imdbID}&apikey=${api_key}`)//CALLING API TO GET THE INFO
    //saving it to state:
    .then((response) => setSelectedMovie(response.data))
}, [movieInfo]) 

    return(
        <div className="more-info-header">
            <img className="movie-info-img" src={selectedMovie?.Poster}></img>
            <div className="info-column">
            <div className="movie-name-info">Movie Name: {selectedMovie?.Title}</div>
            <div className="movie-more-info">Rating: <span>{selectedMovie?.imdbRating}</span></div>
            <div className="movie-more-info">Language: <span>{selectedMovie?.Language}</span></div>
            <div className="movie-more-info">Genre: <span>{selectedMovie?.Genre}</span></div>
            <div className="movie-more-info">Country: <span>{selectedMovie?.Country}</span></div>
            <div className="movie-more-info">Awards: <span>{selectedMovie?.Awards}</span></div>
            <div className="movie-more-info">Actors: <span>{selectedMovie?.Actors}</span></div>
            <div className="movie-more-info">Plot: <span>{selectedMovie?.Plot}</span></div>
            <div className="movie-more-info">Runtime: <span>{selectedMovie?.Runtime}</span></div>
            <div className="movie-more-info">Director: <span>{selectedMovie?.Director}</span></div>
            </div>
        </div>
    )
}

export default MoreInfo;