import React, { useState } from 'react';
import './MovieCard.css';
import MovieModal from '../Modal/MovieModal';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
    let { movie } = props;
    const [modalIsOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    return (
        <div className="card">
            <div className="thumbnailContainer">
                <img src={movie.Poster} className="thumbnail" alt={movie.Title} onClick={openModal} />
                <MovieModal closeModal={closeModal} modalIsOpen={modalIsOpen} image={movie.Poster} title={movie.Title} />
            </div>
            
            <Link to={`/${movie.imdbID}`}>
                <h2 className="title">{movie.Title}</h2>
            </Link>
        </div>
    )
}
