import React from 'react';
import './Homepage.scss';
import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './HomePageStyles';

function componentName() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}

export default componentName;
