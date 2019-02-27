import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import jwtDecode from "jwt-decode";

import App from "./components/App";
import Home from "./components/layout/Home";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Dashboard from "./components/profile/Dashboard";

import rootReducers from "./reducers";
import isEmpty from "./utils/isEmpty";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

const middleware = [thunk];
let user = {};
let isAuthenticated = false;
if (localStorage.token) {
  isAuthenticated = !isEmpty(localStorage.token);
  user = jwtDecode(localStorage.getItem("token"));
}
const store = createStore(
  rootReducers,
  {
    auth: {
      isAuthenticated,
      user
    }
  },
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
