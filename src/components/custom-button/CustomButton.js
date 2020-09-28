import React from 'react';
import './CustomButton.scss';
import { CustomButtonContainer } from './CustomButtonStyles';

function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

export default CustomButton;
