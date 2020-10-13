import ShopActionsTypes from './shop.types';
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
