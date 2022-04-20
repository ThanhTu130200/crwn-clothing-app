import React from "react"
import { useSelector } from "react-redux"

import { ItemWithQuantity } from "../../model"
import { State } from "../../redux/rootReducer"

import CheckoutItem from "../../components/checkout-item/CheckoutItem"
import StripeButton from "../../components/stripe-button/StripeButton"

import "./Checkout.scss"

const Checkout: React.FC = React.memo(() => {
	const { cartItems } = useSelector((state: State) => state.cart)
	const total = cartItems.reduce(
		(accumulatedQuantity: number, cartItem: ItemWithQuantity) =>
			accumulatedQuantity + cartItem.price * cartItem.quantity,
		0
	)
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem: ItemWithQuantity) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total">TOTAL: ${total}</div>
			<div className="test-warning">
				*Please use the following test credit card for payment
				<br />
				4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
			</div>
			<StripeButton price={total} />
		</div>
	)
})

export default Checkout
