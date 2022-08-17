import React from "react";
import Popup from "reactjs-popup";
import '../../App.css';
import classModalData from "../../data/classModalData";
import ClassModalCard from "./ClassModalCard";

const ClassBoxes = ({ data }) => {

  return (
    <div className="classBoxes1">
      <div className="classBoxes2">
        <Popup
          trigger={<img src={data.image} alt="classes" />}
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
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <Popup
        trigger={<button className="classes-button">LEARN MORE</button>}
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
            <button>Checkout</button>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ClassBoxes;