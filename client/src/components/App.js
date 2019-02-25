import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './static/Footer';

const App = props => (
  <div className="App">
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default App;
