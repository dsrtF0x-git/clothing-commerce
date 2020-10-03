import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionsOverView from '../../components/collections-overview/CollectionsOverView';
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

function Shop({ match, updateCollections }) {
  // const [unsubscribeFromSnapshot, setUnsubscribeFromSnapshot] = useState(null);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      console.log(collectionMap);
      updateCollections(collectionMap);
    });
  }, [updateCollections]);

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

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
