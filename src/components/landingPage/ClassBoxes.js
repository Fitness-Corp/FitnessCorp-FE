import React from "react";
import Popup from "reactjs-popup";
import '../../App.css';
import classModalData from "../../data/classModalData";
import ClassModalCard from "./ClassModalCard";

const ClassBoxes = ({ data }) => {
  return (
    <div className="classBoxes">
      {/* image */}
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Popup
        trigger={<button className="button">Learn More</button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            {
              classModalData.map((gym) => (
                <ClassModalCard key={gym.id} gym={gym} />
              ))
            }
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ClassBoxes;