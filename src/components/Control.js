import React from "react";

const Control = ({ list, setCategory, filteredList, deleteComplete }) => {
  return (
    <ul
      className="control-list"
      onClick={(e) => {
        setCategory(e.target.textContent);
      }}
    >
      <li id="totalItem">{filteredList.length} items left</li>
      <ul className='core-controls'>
        <li className="control all" id="all">
          all
        </li>
        <li className="control active" id="active">
          active
        </li>
        <li className="control completed" id="completed">
          completed
        </li>
      </ul>
      <li
        className="control clear-completed"
        id="clear-completed"
        onClick={deleteComplete}
      >
        clear completed
      </li>
    </ul>
  );
};
export default Control;
