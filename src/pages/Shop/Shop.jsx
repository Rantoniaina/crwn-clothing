import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { selectCollections } from '../../redux/Shop/Shop.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Shop = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);
