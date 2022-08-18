import React from 'react';

export default function IconCards({ icon }) {
  return (
    <div className='iconCard'>
      <span>{icon.icon}</span>
      <p>{icon.title}</p>
    </div>
  );
}
