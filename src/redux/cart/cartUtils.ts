import { Item, ItemWithQuantity } from "../../model"

export const addItemToCart = (cartItems: ItemWithQuantity[], cartItemToAdd: Item) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id)

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		)
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems: ItemWithQuantity[], idItemToRemove: number) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === idItemToRemove)

	if (existingCartItem?.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== idItemToRemove)
	}

	return cartItems.map((cartItem) =>
		cartItem.id === idItemToRemove ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
	)
}
