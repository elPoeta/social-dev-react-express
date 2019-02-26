import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import Home from "./components/layout/Home";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

import rootReducers from "./reducers";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

const middleware = [thunk];
const store = createStore(
  rootReducers,
  {
    auth: {
      isAuthenticated: localStorage.getItem("token") ? true : false,
      user: { jwt: localStorage.getItem("token") }
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
