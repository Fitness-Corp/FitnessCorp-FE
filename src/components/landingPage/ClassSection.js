import React from "react";
import classData from "../../data/classData";
import ClassBoxes from "./ClassBoxes";

const ClassSection = () => {
  return (
    <div>
      <h3>Discover Our Classes</h3>
      {
        classData.map((data) => (
          <ClassBoxes data={data} key={data.id} />
        ))
      }
    </div>
  );
};

export default ClassSection;