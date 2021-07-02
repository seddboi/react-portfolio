import React from 'react';
import Navbar from './components/navbar/navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <h1>Is this thing on?</h1>
        <Navbar />
        <Switch>
            <Route path='about-me' exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
