import React from "react";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";

export const Item = ({
  id,
  value,
  isActive,
  removeItem,
  handleComplete,
}) => {
 
  return (
    <div className="item" id="item">
      <button
        className={`${isActive ? "check-con" : "check-con show-check-con"}`}
        onClick={() => {
          handleComplete(id);
        }}
      >
        {isActive ? null : <img src={check} alt="check" className="check" />}
      </button>
      <p
        className={`${isActive ? "list-item" : "list-item strike-item"}`}
        onClick={() => {
          handleComplete(id);
        }}
        >
        {value}
      </p>
      <img
        src={cross}
        alt="cross"
        className="cross show-cross"
        onClick={() => removeItem(id)}
      />
    </div>
  );
};
