import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, searchMovie }) => {
    return (
        <div className='movieList'>
            {movies.filter(movie => {
                    if(searchMovie===''){
                        return movie
                    }
                    else if(movie.title.toLowerCase().includes(searchMovie.toLowerCase())){
                        return movie
                    } 
                }).map(movie => 
                    <MovieCard key={ movie.id } movie={ movie } />
                )
            }
        </div>
    );
}

export default MovieList;
