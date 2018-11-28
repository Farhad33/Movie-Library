import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

class MovieListItem extends Component {

    movieOnClick = (movieId) => {
        this.props.history.push(`/movie/${movieId}`)
    }

    render() {
        const { poster_path } = this.props.movie;
        return (
            poster_path ?
                <MovieContainer
                    onClick={() => this.movieOnClick(this.props.movie.id)}>
                    <MovieImage src={`https://image.tmdb.org/t/p/w154${poster_path}`} />
                </MovieContainer>
            : null
        );
    }
}

const MovieImage = styled.img`
    width: 100%;
    cursor: pointer;
`;

const MovieContainer = styled.div`
`;

export default withRouter(MovieListItem);