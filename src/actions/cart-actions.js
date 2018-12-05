export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_RFOM_CART = 'DELETE_FORM_CART';
export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product, quantity, unitCost
    }
  }
}
export function deleteFromCart(product) {
  return {
    type: DELETE_RFOM_CART,
    payload: {
      product
    }
  }
}
export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: {
      product, quantity, unitCost
    }
  }
}