import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/layout/Home';

import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
    <App>
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </App>
</BrowserRouter>, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
