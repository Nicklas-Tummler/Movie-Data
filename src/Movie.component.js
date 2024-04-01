import React from "react";

const MovieData = (props) => {
    const {Poster, Title, Year, imdbID, Type} = props.movie;

    return(
        <div className="movie-container" onClick={() => props.updateMovieInfo(props.movie)}>
            <img className="movie-poster-img" src={Poster}></img>
            <div className="movie-name">Movie name: {Title}</div>
            <div className="movie-info">
                <span className="info">Year: {Year}</span>
                <span className="info">Type: {Type}</span>
            </div>
        </div>
    )
}

export default MovieData;