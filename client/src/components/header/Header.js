import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>
                        Titulo
                </h1>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;