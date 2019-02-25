import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1><Link to='/'>Social-Dev's</Link></h1>
                    <ul><li><Link to='/profiles'>Developers</Link></li></ul>
                    <nav>
                        <ul>
                            <li><Link to='/signup'>Sign Up</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </nav>
                </header>
            </div >
        )
    }
}

export default Header;