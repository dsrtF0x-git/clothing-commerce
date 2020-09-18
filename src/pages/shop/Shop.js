import React from 'react';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import CollectionsOverView from '../../components/collections-overview/CollectionsOverView';

function Shop({ match }) {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverView} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={Collection}
      />
    </div>
  );
}

export default Shop;
