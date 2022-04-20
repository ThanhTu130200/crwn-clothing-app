import { CartActionTypes } from "./cartTypes"

import { Item } from "../../model"

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item: Item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
})

export const removeItem = (itemId: number) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: itemId,
})

export const clearItemFromCart = (itemId: number) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: itemId,
})
