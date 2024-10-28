import React, { Component } from 'react'
import {getMovies} from "../services/fakeMovieService";
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import Like from "./common/like";

class Movies extends Component {
    state = {
        movies: getMovies()
    }
    handleDeleteMovie = (movie) =>{
        const updateMovie =
            this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: updateMovie});
        };
    handleLikeMovie = (movie) => {
    const movies = [ ...this.state.movies ];
    const index = movies.indexOf(movie);
    if (index !== -1) {
        movies[index] = { ...movies[index], liked: !movies[index].liked };
        this.setState({ movies });
    }
};

    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie => (
                        <tr>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    liked={movie.liked}
                                    onClick={()=>this.handleLikeMovie(movie)}
                                />
                            </td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => this.handleDeleteMovie(movie)}>
                                    Delete
                                </button>
                            </td>

                        </tr>))}

                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;