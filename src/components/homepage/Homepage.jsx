import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPopular } from '../../actions/movieActions';

class Homepage extends Component {

    componentDidMount() {
        this.props.requestPopular()
    }

    render() {
        return (
            <div>
                movies
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
  })
  
  const mapDispatchToProps = dispatch => ({
    requestPopular: () => dispatch(requestPopular())
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Homepage)