import React from 'react';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import { Route } from 'react-router-dom';
import Category from '../Category/Category';

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={Category} />
  </div>
);

export default Shop;
