import React from 'react';
import './MovieTable.css';
import MovieCard from '../Card/MovieCard';

export default function MovieTable(props) {
    console.log("props movies", props.movies);
    let movies = props.movies;
    return (
        <div className="movieTable">
            {movies.map((movie, index) => {
                return <MovieCard movie={movie} key={index} />
            })}
        </div>
    )
}
