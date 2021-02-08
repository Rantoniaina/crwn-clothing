import React, { useContext } from 'react';
import './Collection.styles.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import CollectionsContext from '../../contexts/collections/Collections.context';

const Collection = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className="category">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Collection;
