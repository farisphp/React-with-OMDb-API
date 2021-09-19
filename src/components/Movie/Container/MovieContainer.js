import React, { useState, useEffect } from 'react';
import Searchbox from '../../Search/SearchBox';
import MovieTable from '../Table/MovieTable';
import * as API from '../../../services/MovieService';

export default function MovieContainer() {
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState("batman");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [submit, setSubmit] = useState(false);

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
          if(!loading) {
            handleLoadMore();
            console.log("Load more")
          }
        }
    }

    const handleSearch = () => {
        setMovie([]);
        setLoading(true);
        setPage(1);
        setSubmit(true);
    }

    const handleLoadMore = () => {
        setPage(page + 1);
        setLoading(true);
    }

    const fetchMovie = (search, page) => {
        try {
            setTimeout(async () => {
                let response = await API.getMovieBySearch(search, page);
            
                if (response.status === 200) {
                    console.log("Old movie", movie)
                    
                    let movieData = response.data.Search;

                    if (page > 1) {
                        movieData = movie.concat(response.data.Search);
                    }
                    console.log(`Movie data ${page}`, movieData);

                    setMovie(movieData);
                    setLoading(false);
                }
            },1500);
        } catch (error) {
            console.log("Something is error");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovie(search, page)
    }, [page, submit])

    return (
        <>
            <Searchbox value={search} onSearch={setSearch} handleSearch={handleSearch}/>
            <MovieTable movies={movie}/>
            
            {loading ? 
                <p>{"Loading data..."}</p> : ""
            }
        </>
    )
}
