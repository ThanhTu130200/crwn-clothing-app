import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { toggleCartHidden } from "../../redux/cart/cartActions"

import "./CartIcon.scss"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { State } from "../../redux/rootReducer"
import { ItemWithQuantity } from "../../model"

const CartIcon: React.FC = React.memo(() => {
	const dispatch = useDispatch()
	const toggleCart = bindActionCreators(toggleCartHidden, dispatch)
	const { cartItems } = useSelector((state: State) => state.cart)
	const itemCount = cartItems.reduce(
		(accumulatedQuantity: number, cartItem: ItemWithQuantity) =>
			accumulatedQuantity + cartItem.quantity,
		0
	)
	return (
		<div className="cart-icon" onClick={toggleCart}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	)
})

export default CartIcon
