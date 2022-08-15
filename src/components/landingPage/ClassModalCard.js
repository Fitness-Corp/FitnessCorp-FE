import React from "react";

const ClassModalCard = ({ gym }) => {
  return (
    <div>
      <div >
        <h2>{gym.title}</h2>
        <p>{gym.description}</p>
        <p>Duration: {gym.duration}</p>
        <p>Intensity: {gym.intensity}</p>
        <h4>{gym.subtitle}</h4>
        <p>{gym.firstIcon}</p>
        <p>{gym.firstText}</p>
        <p>{gym.secondIcon}</p>
        <p>{gym.secondText}</p>
      </div>
    </div>
  );
};

export default ClassModalCard;