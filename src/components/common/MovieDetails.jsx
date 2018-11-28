import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestMovieDetails } from 'src/actions/movieActions'

class MovieDetails extends Component {

    componentDidMount() {
        this.props.requestMovieDetails(this.props.match.params.movie)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.movie !== prevProps.match.params.movie) {
            this.props.requestMovieDetails(this.props.match.params.movie);
        }
    }

    titleAndRelease = () => {
        const { title, release_date } = this.props.movieDetails;
        const year = new Date(release_date).getUTCFullYear();
        return `${title} (${year})`;
    }

    getAllGenres = () => {
        const { genres } = this.props.movieDetails;
        return genres ?
            genres.map(genre => (genre.name)).join(', ')
        :
            null;
    }

    render() {
        const { poster_path, tagline, overview, runtime, vote_average } = this.props.movieDetails;
        return (
            <ParentContainer>
                <MovieImage src={`https://image.tmdb.org/t/p/w342${poster_path}`}/>
                <DetailsContainer>
                    <MovieTitle>{this.titleAndRelease()}</MovieTitle>
                    <MovieTagline>{tagline}</MovieTagline>
                    <MovieGenres>{this.getAllGenres()}</MovieGenres>
                    <MovieOverview>{overview}</MovieOverview>
                    <p>{`Runtime: ${runtime} minutes`}</p>
                    <p>{`Rating: ${vote_average}/10`}</p>
                </DetailsContainer>
            </ParentContainer>
        );
    }
}

const MovieImage = styled.img`
    padding: 1em;
`;

const MovieTitle = styled.h1`
    
`;

const MovieOverview = styled.p`
    font-size: 1.1em;
    margin: 1em 0;
`;
const MovieTagline = styled.p`
    font-size: 1.4em;
`;

const MovieGenres = styled.h3`
    font-style: italic;
`;

const DetailsContainer = styled.div`
    display: inline-block;
    padding: 1em;
    color: white;
`;

const ParentContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    @media (max-width: 755px) {
        flex-wrap: wrap;
    }
`;


const mapStateToProps = state => ({
    movieDetails: state.movieDetails
})

const mapDispatchToProps = dispatch => ({
    requestMovieDetails: (movieId) => dispatch(requestMovieDetails(movieId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));