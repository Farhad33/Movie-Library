import React, { Component } from 'react';
import { connect } from 'react-redux';
import searchLogo from 'src/Assets/search.svg';
import styled from 'styled-components';
import { requestSearchedMovies } from 'src/actions/searchActions';
import { withRouter } from 'react-router';

class Search extends Component {

    state = {
        searchValue: ''
    }

    submitSearch = (e) => {
        e.preventDefault();
        console.log(this.state.searchValue);
        this.props.requestSearchedMovies(this.state.searchValue);
        this.props.history.push(`/search/${this.state.searchValue}`)
    }

    onChangeInput = (e) => {
        this.setState({ searchValue: e.target.value})
    }

    render() {
        return (
            <SearchForm onSubmit={this.submitSearch} >
                <SearchInput
                    value={this.state.searchValue}
                    onChange={this.onChangeInput}
                />
                <SearchSubmit  type="submit" value="" />
            </SearchForm>
        );
    }
}

const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    position: relative;
    border: 1px solid white;
    border-radius: 15px;
    height: 2em;
`;

const SearchSubmit = styled.input`
    background: url(${searchLogo});
    background-repeat: no-repeat;
    background-size: 5em 2em;
    width: 5em;
    margin: .4em;
    border: none;

`;

const SearchInput = styled.input`
    min-width: 10vw;
    max-width: 20vw;
    padding: 1em;
    border: none;
    flex-grow: 2;
    background: #141414;
    caret-color: white;
    border-radius: 15px;
    color: white;
    font-size: 1em;
    outline: none;
    :focus {
        box-shadow: 0 0 3pt 2pt #9c0a03;
    }
`;

const mapDispatchToProps = dispatch => ({
    requestSearchedMovies: (value) => dispatch(requestSearchedMovies(value))
})

export default withRouter(connect(null, mapDispatchToProps)(Search));