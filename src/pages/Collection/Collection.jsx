import React from 'react';
import './Collection.styles.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

const Collection = ({ collection }) => {
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
