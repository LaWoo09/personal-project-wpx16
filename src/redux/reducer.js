import axios from "axios";


//set initial state
const initialState = {
    user: {},
    products: {},
    cart: []
}

//constants
const SET_USER = "SET_USER";
const GET_FOR_MEN = "GET_FOR_MEN";
const GET_SKINCARE = "GET_SKINCARE";
const GET_HAIR = "GET_HAIR";
const GET_BEAUTY = "GET_BEAUTY"
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const LOGOUT = "LOGOUT";



//action creators
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}
export function logout() {
    return {
        type: LOGOUT
    }
}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}


//reducer

export default function reducer(state = initialState, action ) {
    const { type, payload } = action;
    switch(type) {
        case SET_USER:
            return {
                ...state,
                user: payload
            }

            case ADD_TO_CART: 
                return {
                    ...state,
                    cart: [...state.cart, payload]
                }
            case LOGOUT: 
            return {
                ...state,
                user: {}
            }


        default: return state;
    }

}


