import React from 'react';

export default function Checkout() {
  return (
    <div className="cart">
      <h2>Checkout Items</h2>
      <h3>Total Amount: $</h3>
      <button onClick={() => alert('No checkout yet')}>Checkout</button>
    </div >
  );
}
