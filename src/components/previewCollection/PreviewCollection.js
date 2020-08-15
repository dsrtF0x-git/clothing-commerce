import React from "react";
import "./PreviewCollection.scss";
import CollectionItem from "../collection-item/CollectionItem";

function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...rest }) => (
            <CollectionItem key={id} {...rest} />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
