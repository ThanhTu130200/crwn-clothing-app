import React from "react"
import { useSelector } from "react-redux"

import MenuItem from "../menu-item/MenuItem"
import "./Directory.scss"

import { Section } from "../../model"
import { State } from "../../redux/rootReducer"

const Directory: React.FC = () => {
	const { sections } = useSelector((state: State) => state.directory)
	return (
		<div className="directory-menu">
			{sections.map((section: Section) => (
				<MenuItem
					key={section.id}
					title={section.title}
					imageUrl={section.imageUrl}
					size={section.size}
				/>
			))}
		</div>
	)
}

export default Directory
