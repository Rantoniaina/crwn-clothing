import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Collection from "./Collection";
import Spinner from "../../components/Spinner/Spinner";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{
      title: match.params.collectionId,
    }}
  >
    {({ loading, data: { getCollectionsByTitle } }) => {
      if (loading) return <Spinner />;
      return <Collection collection={getCollectionsByTitle} />;
    }}
  </Query>
);

export default CollectionPageContainer;