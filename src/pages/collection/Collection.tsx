import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import CollectionItem from "../../components/collection-item/CollectionItem"
import { State } from "../../redux/rootReducer"
import { Collection as CollectionType } from "../../model"

import "./Collection.scss"

const Collection: React.FC = () => {
	const path = useParams().collectionId
	const collection: CollectionType | undefined = useSelector((state: State) =>
		state.shop.collections.find((collection) => collection.routeName === path)
	)

	return (
		<div className="collection-page">
			<h2 className="title">{collection?.title.toUpperCase()}</h2>
			<div className="items">
				{collection?.items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default Collection
