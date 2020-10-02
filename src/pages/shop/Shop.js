import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import CollectionsOverView from '../../components/collections-overview/CollectionsOverView';
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

function Shop({ match }) {
  const [unsubscribeFromSnapshot, setUnsubscribeFromSnapshot] = useState(null);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionSnapshotToMap(snapshot);
    });
  }, []);

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
