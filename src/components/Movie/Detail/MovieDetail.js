import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import * as API from '../../../services/MovieService';
import './MovieDetail.css';

export default function MovieDetail() {
    let { imdbId } = useParams();
    const [detail, setDetail] = useState({});

    const fetchMovie = useCallback(async () => {
        try {
            let response = await API.getMovieById(imdbId);
            
            if (response.status === 200) {
                let detailData = response.data;
                console.log("Detail data", detailData);
                setDetail(detailData);
            }
        } catch (error) {
            console.log("Something is error", error);
        }
    }, [])

    useEffect(() => {
        fetchMovie();
    }, [fetchMovie])

    return (
        <div className="detail">
            <div className="detail-info">
                <div className="poster">
                    <img src={detail.Poster} alt={detail.Title} className="imgPoster" />
                    <span className="rating">{detail.imdbRating}</span>
                </div>
                <div className="summary">
                    <div className="group">
                        <h1>{detail.Title}</h1>
                        <p>Year: {detail.Year}</p>
                        <p>Rated: {detail.Rated}</p>
                        <p>Released: {detail.Released}</p>
                        <p>Runtime: {detail.Runtime}</p>
                        <p>Genre: {detail.Genre}</p>
                        <p>Director: {detail.Director}</p>
                        <p>Writer: {detail.Writer}</p>
                        <p>Actors: {detail.Actors}</p>
                        <p>Language: {detail.Language}</p>
                        <p>Country: {detail.Country}</p>
                    </div>
                </div>
            </div>

            <div className="desc">
                <p><b>Plot</b></p>
                <p>
                    {detail.Plot}
                </p>
            </div>
        </div>
    )
}
