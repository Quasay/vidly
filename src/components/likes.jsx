import React from "react";

const Likes = props => {
  let heartCSS = "fa fa-heart";
  if (!props.liked) heartCSS += "-o";

  return (
    <i
      onClick={props.onClick}
      className={heartCSS}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Likes;
