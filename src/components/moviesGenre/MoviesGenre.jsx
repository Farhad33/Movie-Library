import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { requestGenreMovies } from '../../actions/moviesGenreActions';
import { withRouter } from 'react-router';
import MovieList from '../common/MovieList.jsx';

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
        return (
            <MovieList movies={this.props.moviesGenre}/>
        );
    }
}

const mapStateToProps = state => ({
    moviesGenre: state.moviesGenre
  })
  
  const mapDispatchToProps = dispatch => ({
    requestGenreMovies: (genre) => dispatch(requestGenreMovies(genre))
  })
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genre));