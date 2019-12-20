import React from 'react';
import PropType from 'prop-types';
import './Movie.css';

function Movie({id, year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h1 className="movie__title">{title}</h1>
                <h4 className="movie__year">{year}</h4>
                <ul className="genres">{genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li>)}</ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.prototype = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired
}

export default Movie;