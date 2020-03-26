import React from 'react';
import PropTypes from 'prop-types';
import {Link }from 'react-router-dom';


const Card = ({ movie }) => {
    const img = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
    return (
        <div className="card card-item">
            <div className="card-body">
                <img src={img} alt="{movie.img.alt}" width="400" className="card-img-top" />
            </div>
            <h6>{`Votes: ${movie.popularity}`}</h6>
            <p>{movie.title}</p>  <p>Released: {movie.release_date}</p>
            <Link to={`details/${movie.id}`} className="btn btn-primary">More details</Link>

        </div>
    )
}

Card.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        release_date: PropTypes.string,
        backdrop_path: PropTypes.string,
        popularity: PropTypes.number,
        overview: PropTypes.string,
        id: PropTypes.number
    }).isRequired,
};

export default Card;