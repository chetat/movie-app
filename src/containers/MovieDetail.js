import React, { Component } from 'react';
import MovieImageCard from '../components/MovieImageCard';
import MovieOverView from '../components/MovieOverview';
import PropTypes from 'prop-types';


class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            imagePath: null,
            loading: true,
        };
    }


    async componentDidMount() {
        const movieId = this.props.match.params.movieId
        const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=`);
        const movieJson = await movie.json();

        if (movieJson) {
            this.setState({ movie: movieJson })
        }


    }

    render() {
        const { poster_path } = this.state.movie
        return (
            <div className="container detail-container" style={{backgroundImage:this.state.movie.poster_path}}>
                    <div className="image-card">
                        <MovieImageCard path={poster_path} />
                    </div>
                    <div className="overview">
                        <MovieOverView movie={this.state.movie}/>
                    </div>
                </div>
        )
    }
}
MovieDetail.propTypes = {
    match: PropTypes.object.isRequired,

}



export default MovieDetail;