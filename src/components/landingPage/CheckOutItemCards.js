import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions";

const CheckOutItem = ({ item, dispatch }) => {

    const removeItem = () => {
        dispatch(removeFromCart(item));
    };

    return (
        <div className="cart-card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={removeItem}>Remove</button>
        </div>
    );
};



export default connect()(CheckOutItem);