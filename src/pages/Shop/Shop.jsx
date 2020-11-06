import React from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import Collection from "../Collection/Collection";
import { connect } from "react-redux";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import { fetchCollectionsStartAsync } from "../../redux/Shop/Shop.actions";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/Shop/Shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
