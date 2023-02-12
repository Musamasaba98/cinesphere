import React from "react";

const MoviesTitle = (props) => {
  return (
    <div
      className="text-2xl
      text-gray-400
      font-bold
      uppercase
      mx-8"
    >
      {props.children}
    </div>
  );
};

export default MoviesTitle;
