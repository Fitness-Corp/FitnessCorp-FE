import React from "react";
import { BsClock } from 'react-icons/bs';
import { GiWaterDrop } from 'react-icons/gi';

const ClassModalCard = ({ gym }) => {
  return (
    <div className="classModalCard">
      <img src={gym.image} alt='class' />
      <div className="classCard">
        <h2>{gym.title}</h2>
        <p>{gym.description}</p>
        <h3>Duration: {gym.duration}</h3>
        <h3>Intensity: {gym.intensity}</h3>
        <h3>What you need to know before the class:</h3>
        <p><span><BsClock /></span>{gym.firstText}</p>
        <p><span><GiWaterDrop /></span>{gym.secondText}</p>
        <button onClick={() => alert('Currently working on checkout system.')}>CHECKOUT</button>
      </div>
    </div>
  );
};

export default ClassModalCard;