import React from "react";
import classData from "../../data/classData";
import ClassBoxes from "./ClassBoxes";

const ClassSection = () => {
  return (
    <div>
      <p>Discover Our Classes</p>
      {
        classData.map((data) => (
          <ClassBoxes data={data} key={data.id} />
        ))
      }
    </div>
  );
};

export default ClassSection;