import React, { lazy, useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header/Header';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';
import Spinner from './components/spinner/Spinner';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));
const SignInAndSignUp = lazy(() =>
  import('./components/sign-in-sign-up/SignInAndSignUp')
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Suspense>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);
