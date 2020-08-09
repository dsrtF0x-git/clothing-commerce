import React, { useState } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";

function Directory() {
  const [sections, setSections] = useState({
    sections: [
      {
        title: "Hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
      },
      {
        title: "Jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
      },
      {
        title: "Sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
      },
      {
        title: "Women",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        id: 4,
        size: "large",
      },
      {
        title: "Mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/hats.png",
        id: 5,
        size: "large",
      },
    ],
  });

  return (
    <div className="directory-menu">
      {sections.sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

export default Directory;
