import React, { Component } from 'react';
import styled from 'styled-components';

class MovieListItem extends Component {

    render() {
        return (
            <MovieContainer>
                <MovieImage src={`https://image.tmdb.org/t/p/w154${this.props.movie.poster_path}`} />
            </MovieContainer>
        );
    }
}

const MovieImage = styled.img`
    width: 100%;
`;

const MovieContainer = styled.div`
    /* width: 100%; */
`;

export default MovieListItem;