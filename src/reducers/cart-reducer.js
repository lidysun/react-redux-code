import { ADD_TO_CART } from '../actions/cart-actions'
import { UPDATE_CART } from '../actions/cart-actions'
import { DELETE_RFOM_CART } from '../actions/cart-actions'

const initialState = {
  cart: [{
    product: 'bread 700g',
    quantity: 2,
    unitCost: 90
  }, {
    procuct: 'milk 500ml',
    quantity: 1,
    unitCost: 47
  }]
}

export default function (state = initialState, action) {
  switch (action.type) {

    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }

    case UPDATE_CART: {
      return {
        ...state,
        cart: state.cart.map(function (item) {
          return item.product === action.payload.product ? action.payload : item
        })
      }
    }

    case DELETE_RFOM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
    }

    default:
      return state;
  }
}