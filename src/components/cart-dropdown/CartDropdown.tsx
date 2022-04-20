import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { bindActionCreators } from "redux"

import { State } from "../../redux/rootReducer"
import { ItemWithQuantity } from "../../model"

import CustomButton from "../custom-button/CustomButton"
import CartItem from "../cart-item/CartItem"
import { toggleCartHidden } from "../../redux/cart/cartActions"

import "./CartDropdown.scss"

const CartDropdown: React.FC = () => {
	const dispatch = useDispatch()
	const toggleCart = bindActionCreators(toggleCartHidden, dispatch)
	const cartItems = useSelector((state: State) => state.cart.cartItems)
	const navigate = useNavigate()
	const handleGoToCheckout = () => {
		navigate("/checkout")
		toggleCart()
	}
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem: ItemWithQuantity) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton onClick={handleGoToCheckout}>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

export default CartDropdown
