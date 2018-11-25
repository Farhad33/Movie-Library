import React, { Component } from 'react';
import logo from '../../Assets/logo.png';
import styled from 'styled-components'
import Genres from './Genres.jsx';
import search from '../../Assets/search.svg';

class Header extends Component {

    render() {
        return (
            <div>
                <NavBar>
                    <Left>
                        <Logo src={logo} alt="movie logo"/>
                        <Genres />
                    </Left>
                    <Right>
                        <Logo src={search} />
                    </Right>
                </NavBar>
            </div>
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



export default Header;