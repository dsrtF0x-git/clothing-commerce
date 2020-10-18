import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import { connect } from 'react-redux';
import SignInAndSignUp from './components/sign-in-sign-up/SignInAndSignUp';
import Header from './components/header/Header';
import Checkout from './pages/checkout/Checkout';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default connect(null, null)(App);
