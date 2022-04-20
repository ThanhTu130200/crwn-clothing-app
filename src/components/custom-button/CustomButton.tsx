import React from "react"
import "./CustomButton.scss"

type Props = {
	children: any
	isGoogleSignIn?: boolean
	inverted?: boolean
	type?: string
	onClick?: any
}

const CustomButton: React.FC<Props> = ({
	children,
	onClick,
	isGoogleSignIn,
	inverted,
	...ortherProps
}) => {
	return (
		<button
			onClick={onClick ? onClick : undefined}
			className={`${inverted ? "inverted" : ""} ${
				isGoogleSignIn ? "google-sign-in" : ""
			} custom-button`}>
			{children}
		</button>
	)
}

export default CustomButton
