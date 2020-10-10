import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/WithSpinner';
import CollectionsOverView from './CollectionsOverView';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverView);

export default CollectionOverviewContainer;
