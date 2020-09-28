import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../images/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/CartDropdown';
import {
  HeaderContainer,
  OptionDiv,
  OptionsContainer,
  LogoContainer,
  OptionLink,
} from './HeaderStyles';

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/contact'>Contact</OptionLink>
        {currentUser ? (
          <OptionDiv
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </OptionDiv>
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

export default connect(mapStateToProps)(Header);
