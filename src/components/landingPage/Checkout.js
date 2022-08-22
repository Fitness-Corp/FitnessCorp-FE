import React from 'react';
import { connect } from 'react-redux';
import CheckOutItem from './CheckOutItemCards';

const Checkout = ({cart}) =>  {
  return (
    <div className="cart">
      {cart.cartItems.map((item, idx) => {
        return (
          <CheckOutItem key={item.key} item={item}/>
        )
      })}
      <h3>Total Amount: ${cart.totalAmount}</h3>
      <button onClick={() => alert('No checkout yet')}>Checkout</button>
    </div >
  );
}

const mapState = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapState)(Checkout)