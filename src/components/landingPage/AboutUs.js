import React from "react";
import aboutData from "../../data/aboutData";
import AboutUsBoxes from "./AboutUsBoxes";

const AboutUs = () => {
  return (
    <div className="aboutUsSection">
      <div className="aboutInfo">
        <h2>ABOUT US</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat, nulla eleifend scelerisque tristique, magna sem condimentum ante, sit amet tempor mi felis at enim. In fermentum viverra aliquam. Duis congue leo in metus placerat porta. Maecenas et aliquam arcu.</p>
      </div>
      <div className="aboutData">
        {
          aboutData.map((data) => (
            <AboutUsBoxes data={data} key={data.title} />
          ))
        }
      </div>
    </div>
  );
};

export default AboutUs;