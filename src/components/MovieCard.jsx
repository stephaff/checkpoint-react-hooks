import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className='movieCard'>
            <div className="movieCard-top">
                <img src={ movie.posterURL } alt="movie poster" />
            </div>
            <div className="movieCard-bottom">
                <h3 className='movie-title'>{ movie.title }</h3>
                <div className="rating">1 2 3 4 5</div>
            </div>
        </div>
    );
}

export default MovieCard;
