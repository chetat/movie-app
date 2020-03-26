import React from 'react';
import PropTypes from 'prop-types';


const MovieOverView = ({ movie }) => {
    console.log(movie)
    return (
        <div className="overview-card">
            <h2>{movie.title}</h2>
            <ul>
                <li>Realeased: {movie.release_date}</li>
                <li>popularity: {movie.popularity}</li>


            </ul>
            <h5>Overview</h5>

            <p>{movie.overview}</p>
        </div>
    )
}

MovieOverView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        release_date: PropTypes.string,
        backdrop_path: PropTypes.string,
        popularity: PropTypes.number,
        overview: PropTypes.string,
        votes: PropTypes.number,
        id: PropTypes.number
    }).isRequired,
}

export default MovieOverView;

