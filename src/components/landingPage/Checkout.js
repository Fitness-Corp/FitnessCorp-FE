import React from 'react';
import { connect } from 'react-redux';
import CheckOutItem from './CheckOutItemCards';

const Checkout = ({ cart }) => {
  if (cart.quantity === 0) {
    return <h2>No Items Yet...</h2>;
  }
  return (
    <div className="cart">
      <h2>CART ITEMS:</h2>
      {cart.cartItems.map((item, idx) => {
        return (
          <CheckOutItem key={item.name} item={item} />
        );
      })}
      <h3>Total Amount: ${cart.totalAmount}</h3>
      <button onClick={() => alert('Working on checkout system. Thank you for visiting Fitness Corp.')}>Checkout</button>
    </div >
  );
};

const mapState = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapState)(Checkout);