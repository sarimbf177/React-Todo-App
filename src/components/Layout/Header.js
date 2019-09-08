import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const headerStyle={
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '5px'
    }
    return (
        <header style={headerStyle}>
            <h1>TodoList APP</h1>
            <Link  style={{}}to="/">Home</Link> | <Link to="/About">About</Link>
            
        </header>
    )
}

export default Header;