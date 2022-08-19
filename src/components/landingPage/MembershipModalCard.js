import React from 'react';

export default function MembershipModalCard({ m2 }) {
  return (
    <div className='membershipModalCard'>
      <h3>{m2.name}</h3>
      <img src={m2.image} alt='gym equipment' />
      <p>{m2.bio}</p>
      <span>{m2.price}</span>
      <button onClick={() => alert('Currently working on checkout system.')}>Checkout</button>
    </div>
  );
}
