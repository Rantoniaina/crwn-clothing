import React from 'react';
import './Collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/Shop/Shop.selectors';

const Collection = ({ collection }) => (
  <div className="category">
    <h2>COLLECTION PAGE</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
