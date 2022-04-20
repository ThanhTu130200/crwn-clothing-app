import React from "react"
import { Routes, Route } from "react-router-dom"

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview"
import Collection from "../collection/Collection"

const ShopPage: React.FC = () => {
	return (
		<div className="shop-page">
			<Routes>
				<Route path="" element={<CollectionOverview />} />
				<Route path=":collectionId" element={<Collection />} />
			</Routes>
		</div>
	)
}

export default ShopPage
