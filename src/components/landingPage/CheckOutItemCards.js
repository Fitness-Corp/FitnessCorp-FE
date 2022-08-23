import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions";

const CheckOutItem = ({item, dispatch}) => {
    
    const removeItem = () => {
        dispatch(removeFromCart(item))
    }

    return (
        <div>
            <p>{item.name}</p><p>{item.price}</p><button onClick={removeItem}>Remove</button>
        </div>
    )
}



export default connect()(CheckOutItem)