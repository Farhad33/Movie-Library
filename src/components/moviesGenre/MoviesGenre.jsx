import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { requestGenreMovies } from '../../actions/moviesGenreActions';
import { withRouter } from 'react-router';


class Genre extends Component {

    componentDidMount() {
        this.props.requestGenreMovies(this.props.match.params.genre);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.genre !== prevProps.match.params.genre) {
            this.props.requestGenreMovies(this.props.match.params.genre);
        }
      }

    render() {
        const movies = this.props.moviesGenre;
        console.log('this.props => ', this.props)
        return (
            <Container>
                <MoviesContainer>
                    {movies.map(movie => (
                        <MovieImage
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                        />
                    ))}
                </MoviesContainer>
            </Container>
        );
    }
}

const Container = styled.div`
`;

const MoviesContainer = styled.div`
    width: 100%;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
`;

const MovieImage = styled.img`
`;

const mapStateToProps = state => ({
    moviesGenre: state.moviesGenre
  })
  
  const mapDispatchToProps = dispatch => ({
    requestGenreMovies: (genre) => dispatch(requestGenreMovies(genre))
  })
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genre));