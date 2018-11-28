import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    requestPopular,
    requestNowPlaying,
    requestTopRated,
    requestUpcoming,
    requestLatest
} from '../../actions/movieActions';
import MovieCarousel from './MovieCarousel.jsx';


class Homepage extends Component {

    componentDidMount() {
        this.props.requestPopular();
        this.props.requestNowPlaying();
        this.props.requestTopRated();
        this.props.requestUpcoming();
        this.props.requestLatest();
    }
    
    render() {
        return (
            <div>
                <MovieCarousel title={'Popular'} movies={this.props.popular}/>
                <MovieCarousel title={'Now Playing'} movies={this.props.nowPlaying}/>
                <MovieCarousel title={'Top Rated'} movies={this.props.topRated}/>
                <MovieCarousel title={'Upcoming'} movies={this.props.upcoming}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    popular: state.popular,
    topRated: state.topRated,
    upcoming: state.upcoming,
    nowPlaying: state.nowPlaying
  })
  
  const mapDispatchToProps = dispatch => ({
    requestPopular: () => dispatch(requestPopular()),
    requestNowPlaying: () => dispatch(requestNowPlaying()),
    requestTopRated: () => dispatch(requestTopRated()),
    requestUpcoming: () => dispatch(requestUpcoming()),
    requestLatest: () => dispatch(requestLatest())
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Homepage)