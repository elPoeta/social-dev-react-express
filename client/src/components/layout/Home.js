import React, { Component } from 'react';
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div className="landing">
                <div>
                    <h2>Welcome! Social-Dev's</h2>
                    <p>Expand your knowledge...</p>
                    <ul>
                        <li><button>Sign Up</button></li>
                        <li><button>Login</button></li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Home;