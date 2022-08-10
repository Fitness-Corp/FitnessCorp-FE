import React from 'react';

export default function IconCards({ icon }) {
  return (
    <div>
      <h3>{icon.icon}</h3>
      <h4>{icon.title}</h4>
    </div>
  );
}
