import React from "react";
import { Item } from "./Item";
import Control from "./Control";

const ItemList = ({
  list,
  filteredList,
  removeItem,
  handleComplete,
  deleteComplete,
  setCategory,
}) => {
  return (
    <section className="todo-list">
      {filteredList.map((item) => {
        return (
          <Item
            key={item.id}
            {...item}
            removeItem={removeItem}
            handleComplete={handleComplete}
            setCategory={setCategory}
          />
        );
      })}
      <Control
        list={list}
        setCategory={setCategory}
        filteredList={filteredList}
        deleteComplete={deleteComplete}
      />
    </section>
  );
};
export default ItemList;
