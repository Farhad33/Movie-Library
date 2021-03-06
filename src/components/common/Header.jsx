import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Genres from './Genres.jsx';
import Search from './Search.jsx';
import logo from 'src/Assets/logo.png';

class Header extends Component {

    render() {
        return (
            <NavBar>
                <Left>
                    <Link to="/">
                        <Logo src={logo} alt="movie logo"/>
                    </Link>
                    <Genres />
                </Left>
                <Right>
                    <Search />
                </Right>
            </NavBar>
        );
    }
}

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em;
`;

const Logo = styled.img`
    width: 5em;
    height: 2em;
`;

const Right = styled.div`
    svg {
        width: 1.5em;
        height: 1.5em;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: row;
`;



export default withRouter(Header);