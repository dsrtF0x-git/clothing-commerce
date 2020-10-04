import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionsOverView from '../../components/collections-overview/CollectionsOverView';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverView);
const CollectionPageWithSpinner = WithSpinner(Collection);

function Shop({ match, updateCollections }) {
  const [isLoading, setLoading] = useState(true);
  // const [unsubscribeFromSnapshot, setUnsubscribeFromSnapshot] = useState(null);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      console.log(collectionMap);
      updateCollections(collectionMap);
      setLoading(false);
    });
  }, [updateCollections]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverViewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
