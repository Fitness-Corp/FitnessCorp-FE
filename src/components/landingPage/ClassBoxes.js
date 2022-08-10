import React from "react";

const ClassBoxes = ({ data }) => {
  return (
    <div>
      {/* image */}
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <button>{data.button}</button>
    </div>
  );
};

export default ClassBoxes;