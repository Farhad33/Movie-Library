import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import MovieList from '../common/MovieList.jsx';
import { withRouter } from 'react-router';
import { requestSearchedMovies } from '../../actions/searchActions';

class SearchedMovies extends Component {
    componentDidMount() {
        this.props.requestSearchedMovies(this.props.match.params.search);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.search !== prevProps.match.params.search) {
            this.props.requestSearchedMovies(this.props.match.params.search);
        }
    }

    render() {
        return (
            <MovieList movies={this.props.searchedMovies}/>
        );
    }
}

const mapStateToProps = state => ({
    searchedMovies: state.searchedMovies
})

const mapDispatchToProps = dispatch => ({
    requestSearchedMovies: (value) => dispatch(requestSearchedMovies(value))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchedMovies));