import React from "react";
import classData from "../../data/classData";
import ClassBoxes from "./ClassBoxes";

const ClassSection = () => {
  return (
    <div className="classSection" id="classes">
      <div className="classHeader">
        <h3>Discover Our Classes</h3>
      </div>
      <div className="classData">
        {classData.map((data) => (
          <ClassBoxes data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default ClassSection;