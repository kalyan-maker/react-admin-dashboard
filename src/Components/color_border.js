import React from "react";
import ColorBorderCard from "./color_border_card";
import ItemsData from "./itemsdata";

// container for cards with left colored border
const ColorBorderCardsContainer = () => {
  return (
    <div className="row">
      {ItemsData.map((item, idx) => (
        <ColorBorderCard id={idx} {...item} />
      ))}
    </div>
  );
};

export default ColorBorderCardsContainer;
