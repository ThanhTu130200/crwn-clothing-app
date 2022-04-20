import { Action, ItemWithQuantity } from "../../model"
import { CartActionTypes } from "./cartTypes"
import { addItemToCart, removeItemFromCart } from "./cartUtils"

const initialState = {
	hidden: true,
	cartItems: [],
}

const cartReducer = (state: any = initialState, action: Action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			}
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			}
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			}
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem: ItemWithQuantity) => cartItem.id !== action.payload
				),
			}
		default:
			return state
	}
}

export default cartReducer
