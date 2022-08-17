import React from "react";

const AboutUsBoxes = ({ data }) => {
  return (
    <div className="aboutUsBoxes">
      <div className="aboutBox">
        <img src={data.image} alt='gym vibes' />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default AboutUsBoxes;