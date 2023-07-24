import React from 'react';
import './App.css';
import Homepage from '../src/pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in and sign-up/sign-in and sign-up.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currenctUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currenctUser:user });  

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



 
  render(){
    return (
      <div>
        <Router>
          <Header currentUser = {this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ ShopPage } />
            <Route path="/signin" component={ SignInAndSignOut } />
          </Switch>
        </Router>     
  
      </div>
    );
    
  }
}

export default App;
