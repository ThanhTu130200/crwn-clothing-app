import React from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import { addItem } from "../../redux/cart/cartActions"

import CustomButton from "../custom-button/CustomButton"

import "./CollectionItem.scss"

import { Item } from "../../model"

type Props = {
	item: Item
}

const CollectionItem: React.FC<Props> = ({ item }) => {
	const dispatch = useDispatch()
	const add = bindActionCreators(addItem, dispatch)
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${item.imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{item.name}</span>
				<span className="name">{item.price}</span>
			</div>
			<CustomButton onClick={() => add(item)} inverted>
				Add to cart
			</CustomButton>
		</div>
	)
}

export default CollectionItem
