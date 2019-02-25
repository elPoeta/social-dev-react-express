import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Social-Dev's</h1>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/signup'>Sign Up</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;