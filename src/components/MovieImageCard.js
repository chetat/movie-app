import React from 'react';
import PropTypes from 'prop-types';



const MovieImageCard = ({path}) => {
    
    const img = 'https://image.tmdb.org/t/p/original' + path;
    console.log(img)
    return (
        <div className="image-card">
            <img src={img} alt="Nothing for now" className="img-fluid" />
        </div>
    )
}

MovieImageCard.propTypes = {
    path: PropTypes.string
}

export default MovieImageCard;

