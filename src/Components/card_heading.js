import React from "react";

// heading for all card elements
// menu is the dropdown menu
function CardHeading({ title, menu }) {
  return (
    <div
      className={`card-header py-3 ${
        menu
          ? "card-header py-3 d-flex flex-row align-items-center justify-content-between"
          : null
      }`}
    >
      <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
      {menu ? menu : null}
    </div>
  );
}

export default CardHeading;
