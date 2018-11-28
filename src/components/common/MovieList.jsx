import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

class MovieList extends Component {

    movieOnClick = (movieId) => {
        this.props.history.push(`/movie/${movieId}`)
    }

    render() {
        return (
            <MoviesContainer screenWidth={window.innerWidth}>
                {this.props.movies.map(movie => (
                    movie.poster_path ?
                    <ImageContainer key={movie.id}>
                        <MovieImage
                            onClick={() => this.movieOnClick(movie.id)}
                            src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                        />
                    </ImageContainer>
                    : null
                ))}
            </MoviesContainer>
        );
    }
}

const ImageContainer = styled.div`
    width: 174px;
    height: 251px;
    line-height: 251px;
    vertical-align: middle;
    text-align: center;
`;

const MovieImage = styled.img`
    width: 154px;
    cursor: pointer;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
    transition-delay: 0ms;
    :hover {
        z-index: 4;
        transform: translate3d(-.5px, -15px, 0px);
        width: 174px;
    }
`;

const MoviesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: ${props => (Math.floor(props.screenWidth / 174)) * 174}px;
    margin: 0 auto;
`;

export default withRouter(MovieList);