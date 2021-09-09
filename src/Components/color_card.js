import React from "react";

// card component filled with color 
const ColorCard = ({ colorName, colorCode, textColor }) => {
  return (
    <div className="col-lg-6 mb-4">
       <div className={`card ${!textColor? 'text-white' : 'text-black'} bg-${colorName.toLowerCase()} shadow`}>
        <div className="card-body">
          {colorName}
          <div className={!textColor ? "text-white-50" : `${textColor}-50`}>
            {colorCode}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ColorCard;

