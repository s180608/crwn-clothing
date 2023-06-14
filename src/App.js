import React from 'react';
import './App.css';
import Homepage from '../src/pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ ShopPage } />
        </Switch>
      </Router>     

    </div>
  );
}

export default App;
