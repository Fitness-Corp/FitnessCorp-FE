import { TOGGLE_LOGIN, FETCH_FAIL, FETCH_START, FETCH_SUCCESS, FORM_ERROR, LOG_OUT, ADD_ITEM, REMOVE_ITEM } from "../actions/index";
import { v4 as uuidv4 } from 'uuid';

export const initialState = {
    loginPop: false,
    loggedIn: false,
    error: '',
    fetching: false,
    cart: {
        quantity: 0,
        cartItems: [],
        totalAmount: 0,
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOGIN: {
            return {
                ...state,
                loginPop: !state.loginPop
            };
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                loggedIn: true,
                fetching: false,
                error: '',
            };
        }
        case FETCH_START: {
            return {
                ...state,
                fetching: true,
                error: '',
            };
        }
        case FETCH_FAIL: {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case FORM_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                loggedIn: false
            };
        }
        case ADD_ITEM: {
            const newCartItem = {
                name: action.payload.name,
                key: uuidv4(),
                price: action.payload.price
            };
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: [...state.cart.cartItems, newCartItem],
                    quantity: state.cart.quantity + 1,
                    totalAmount: state.cart.totalAmount + newCartItem.price
                }
            };
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: state.cart.cartItems.filter((item) => item.key !== action.payload.key),
                    quantity: state.cart.quantity - 1,
                    totalAmount: state.cart.totalAmount - action.payload.price
                }
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
