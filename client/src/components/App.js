import React from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';

const App = props => (
  <div className="container">
    <div>
      <Header />
      {props.children}
    </div>
    <Footer />
  </div>
);

export default App;
