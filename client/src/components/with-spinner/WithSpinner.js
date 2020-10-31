import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...rest }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...rest} />
  );
};

export default WithSpinner;
