import React from "react";
import CardHeading from "./card_heading";
import undraw_posting_photo from "../Components/img/undraw_posting_photo.svg";

// Illustrations component
function Illustrations() {
  return (
    <div className="card shadow mb-4">
      <CardHeading title="Illustrations" />
      <div className="card-body">
        <div className="text-center">
          <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            style={{ width: "25rem" }}
            src={undraw_posting_photo}
            alt="..."
          />
        </div>
        <p>
          Add some quality, svg illustrations to your project courtesy of{" "}
          <a
            href="https://undraw.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            unDraw
          </a>
          , a constantly updated collection of beautiful svg images that you can
          use completely free and without attribution!
        </p>
        <a href="https://undraw.co/" target="_blank" rel="noopener noreferrer">
          Browse Illustrations on unDraw &rarr;
        </a>
      </div>
    </div>
  );
}

export default Illustrations;
