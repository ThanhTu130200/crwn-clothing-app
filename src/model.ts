export interface Section {
	title: string
	imageUrl: string
	size: string | undefined
	id: number
	linkUrl: string
}

export interface Collection {
	id: number
	title: string
	routeName: string
	items: Item[]
}

export interface Item {
	id: number
	name: string
	imageUrl: string
	price: number
}

export interface Action {
	type: string
	payload?: any
}

export type ItemWithQuantity = Item & { quantity: number }
