import React, { Component } from 'react';
import Card from '../components/Card';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
        };
    }

    async componentDidMount() {
        const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=');
        const moviesJson = await movies.json();
        console.log(moviesJson.results)
        if (moviesJson) {
            this.setState({
                data: moviesJson.results,
                loading: false,
            });
        }
    }

    render() {
        const { data, loading } = this.state;

        if (loading) {
            return <div>Loading</div>
        }
        if (data) {
            return (
                <div className="container list-container">
                    <h2>Popular movies</h2>
                    <div>
                    <div className="row">
                        {data.map(movie =>
                            <div className="col-sm-3 list-item" key={movie.id}>
                                <Card movie={movie} />
                            </div>
                        )}
                    </div>
                </div>
                </div>
            )
        }

    }
}

export default List;