import React from "react";

// this dropdown conponent is planned and used for all the dropdowns displayed on output
// from chart means the dropdown is called from the chart component and has renders specific to it
function DropDown({ dropMenu, fromChart }) {
  return (
    <div
      className={
        fromChart ? "dropdown no-arrow" : "bg-white py-2 collapse-inner rounded"
      }
    >
      {fromChart ? (
        <a
          className="dropdown-toggle"
          href="/#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
        </a>
      ) : (
        ""
      )}
      <div
        className={
          fromChart
            ? "dropdown-menu dropdown-menu-right shadow animated--fade-in"
            : ""
        }
        aria-labelledby={fromChart ? "dropdownMenuLink" : ""}
      >
        {dropMenu.map(({ head, subHeads }) => {
          return (
            <>
              <div
                className={fromChart ? "dropdown-header" : "collapse-header"}
              >
                {head}
              </div>
              {subHeads.map(({ name, link }) =>
                name === "*****" ? (
                  <div className="dropdown-divider" />
                ) : (
                  <a
                    className={fromChart ? "dropdown-item" : "collapse-item"}
                    href={link}
                  >
                    {name}
                  </a>
                )
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DropDown;
