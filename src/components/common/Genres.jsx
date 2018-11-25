import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestGenres } from '../../actions/genreActions';
import styled from 'styled-components'


class Genres extends Component {
    state = {
        status: 'none'
    }

    componentDidMount() {
        this.props.requestGenres();
    }

    handleClick = () => {
        const status = this.state.status === 'none' ? 'block' : 'none';
        this.setState({ status });
    }

    render() {
        return (
            <GenreContainer>
                <Button
                    onClick={this.handleClick}
                >
                    Genres
                </Button>
                <GenreList status={this.state.status}>
                    {this.props.genres.map(genre => (
                        <Genre key={genre.id}>
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
`;

const Genre = styled.li`
    padding: .5em 2em;
    :hover {
        color: #b3b3b3;
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
    genres: state.genres,
  })
  
  const mapDispatchToProps = dispatch => ({
    requestGenres: () => dispatch(requestGenres())
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Genres)