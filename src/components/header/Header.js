import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../images/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import CartDropdown from '../cart-dropdown/CartDropdown';
import {
  HeaderContainer,
  OptionsContainer,
  LogoContainer,
  OptionLink,
} from './HeaderStyles';

function Header({ currentUser, hidden, signOutStart }) {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/contact'>Contact</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
