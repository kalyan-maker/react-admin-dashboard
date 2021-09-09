import React from "react";
import CardHeading from "./card_heading";
import { Link } from "react-router-dom";

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
            src="img/undraw_posting_photo.svg"
            alt="..."
          />
        </div>
        <p>
          Add some quality, svg illustrations to your project courtesy of{" "}
          <a target="_blank" rel="nofollow" as={Link} to="https://undraw.co/">
            unDraw
          </a>
          , a constantly updated collection of beautiful svg images that you can
          use completely free and without attribution!
        </p>
        <a target="_blank" rel="nofollow" as={Link} to="https://undraw.co/">
          Browse Illustrations on unDraw &rarr;
        </a>
      </div>
    </div>
  );
}

export default Illustrations;
