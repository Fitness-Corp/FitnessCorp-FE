import React from "react";

const AboutUsBoxes = ({ data }) => {
  return (
    <div>
      {/* image */}
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      {/* button */}
    </div>
  );
};

export default AboutUsBoxes;