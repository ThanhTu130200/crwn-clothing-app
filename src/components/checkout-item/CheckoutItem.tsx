import React from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import { ItemWithQuantity } from "../../model"
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cartActions"

import "./CheckoutItem.scss"

type Props = {
	cartItem: ItemWithQuantity
}

const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
	const { id, name, imageUrl, price, quantity } = cartItem
	const dispatch = useDispatch()
	const clearItem = bindActionCreators(clearItemFromCart, dispatch)
	const add = bindActionCreators(addItem, dispatch)
	const remove = bindActionCreators(removeItem, dispatch)

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => remove(id)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => add(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<span className="remove-button" onClick={() => clearItem(id)}>
				&#10005;
			</span>
		</div>
	)
}

export default CheckoutItem
