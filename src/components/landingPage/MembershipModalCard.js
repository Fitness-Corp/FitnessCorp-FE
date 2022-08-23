import React from 'react';
import { connect } from 'react-redux';
import { addCheckOutItem } from '../../actions';

const MembershipModalCard = ({ m2, dispatch }) => {

  const buyItem = () => {
    const newItem = {
      name: m2.name,
      price: m2.price
    };
    dispatch(addCheckOutItem(newItem));
  };

  return (
    <div className='membershipModalCard'>
      <h3>{m2.name}</h3>
      <img src={m2.image} alt='gym equipment' />
      <p>{m2.bio}</p>
      <span>${m2.price}</span>
      <button onClick={buyItem}>Add To Cart</button>
    </div>
  );
};



export default connect()(MembershipModalCard);