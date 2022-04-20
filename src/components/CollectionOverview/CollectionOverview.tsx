import React from "react"
import { useSelector } from "react-redux"
import { State } from "../../redux/rootReducer"
import CollectionPreview from "../preview-collection/CollectionPreview"

import "./CollectionOverview.scss"

const CollectionOverview: React.FC = () => {
	const { collections } = useSelector((state: State) => state.shop)

	return (
		<div className="collection-overview">
			{collections.map(({ id, ...otherCollectionProps }: any) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	)
}

export default CollectionOverview
