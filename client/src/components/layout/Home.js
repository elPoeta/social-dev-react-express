import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div className="landing">
                <div>
                    <h2>Welcome! Social-Dev's</h2>
                    <p>Expand your knowledge...</p>
                    <ul>
                        <li><Link to='/signup'>Sign Up</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Home;