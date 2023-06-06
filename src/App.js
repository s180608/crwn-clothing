import React from 'react';
import './App.css';
import Homepage from '../src/pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
);


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </Router>     

    </div>
  );
}

export default App;
