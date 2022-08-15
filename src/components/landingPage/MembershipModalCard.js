import React from 'react';

export default function MembershipModalCard({ m2 }) {
  return (
    <div>
      <h3>{m2.name}</h3>
      <p>{m2.bio}</p>
      <span>{m2.price}</span>
    </div>
  );
}
