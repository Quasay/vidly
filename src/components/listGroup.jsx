// This is the component we used to display the genres in our application.

import React from "react";

const ListGroup = props => {
  const {
    items,
    onItemSelect,
    textProperty,
    valueProperty,
    selectedItem
  } = props;

  return (
    <ul className="list-group">
      {items.map(genre => (
        <li
          onClick={() => onItemSelect(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}

      <li
        className={selectedItem ? "list-group-item" : "list-group-item active"}
        onClick={() => onItemSelect(null)}
        key="All Movies"
      >
        All Genres
      </li>
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
