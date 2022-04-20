import React from "react"
import "./CollectionPreview.scss"
import CollectionItem from "../collection-item/CollectionItem"

import { Item } from "../../model"

type Props = {
	title: string
	items: Item[]
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toLocaleUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	)
}

export default CollectionPreview
