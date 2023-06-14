import React from 'react';
import './App.css';
import Homepage from '../src/pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/homepage/shop/shop.component';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ ShopPage } />
        </Switch>
      </Router>     

    </div>
  );
}

export default App;
