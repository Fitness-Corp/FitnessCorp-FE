import React from "react";
import Popup from "reactjs-popup";
import '../../App.css';
import classData from "../../data/classData";
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
              classModalData.map(function (gym) {
                if (gym.id === data.id) {
                  return <ClassModalCard gym={gym} key={gym.title} />;
                }
              })
            }
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ClassBoxes;