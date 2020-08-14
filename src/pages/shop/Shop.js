import React, { useState } from "react";
import { shopData } from "./shopData";
import PreviewCollection from "../../components/previewCollection/PreviewCollection";

function Shop() {
  const [collections, setCollections] = useState(shopData);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default Shop;
