import { takeEvery } from 'redux-saga/effects';
import ShopActionsTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.log('i am fire');
}

export function* fetchCollectionStart() {
  yield takeEvery(
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
