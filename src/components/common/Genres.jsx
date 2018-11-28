import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestGenres } from '../../actions/genreActions';
import styled from 'styled-components';
import { withRouter } from 'react-router';

class Genres extends Component {
    state = {
        status: 'none'
    }

    componentDidMount() {
        this.props.requestGenres();
    }

    genreClick = (genre) => {
        this.props.history.push(`/genre/${genre.id}`)
    }

    render() {
        return (
            <GenreContainer
                onMouseOver={() => this.setState({ status: 'flex' })}
                onMouseLeave={() => this.setState({ status: 'none' })}
            >
                <Button>Genres</Button>
                <GenreList status={this.state.status}>
                    {this.props.genres.map(genre => (
                        <Genre
                            key={genre.id}
                            onClick={() => this.genreClick(genre)}
                        >
                            {genre.name}
                        </Genre>            
                    ))}
                </GenreList>
            </GenreContainer>
        );
    }
}

const GenreList = styled.ul`
    display: ${props => props.status};
    margin-left: 2em;
    padding: 1em;
    z-index: 10;
    position: absolute;
    background: #090808c4;
    width: 30em;
    min-width: 14em;
    max-width: 22em;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    cursor: pointer;
`;

const Genre = styled.li`
    display: block;
    padding: .5em 0;
    min-width: 8em;
    max-width: 10em;
    font-size: .9em;
    a {
        color: white;
        text-decoration: none;
        :hover {
            color: #b3b3b3;
            text-decoration: underline;
        }
    }
`;

const GenreContainer = styled.div`
    color: white;
    cursor: pointer;
`;

const Button = styled.div`
    padding: 1em 2em;
    margin-left: 2em;
    border-radius: .5em;
    letter-spacing: .1em;
    :hover {
        color: #b3b3b3;
    }
    :active {
        color: #b3b3b3;
        font-weight: bold;
    }
`;

const mapStateToProps = state => ({
    genres: state.genres
  })
  
  const mapDispatchToProps = dispatch => ({
    requestGenres: () => dispatch(requestGenres())
  })
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genres))