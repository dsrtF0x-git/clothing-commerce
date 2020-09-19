import React from 'react';
import './Collection.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

function Collection({ match }) {
  return (
    <div className='collection-page'>
      <h2>Category page</h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
