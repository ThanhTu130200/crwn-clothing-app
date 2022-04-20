import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { State } from "../../redux/rootReducer"

import { auth } from "../../firebase/firebase"
import CartIcon from "../cart-icon/CartIcon"
import CartDropdown from "../cart-dropdown/CartDropdown"

import { ReactComponent as Logo } from "../../assets/crown.svg"

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionDiv,
	OptionLink,
} from "./Header.styles"

const Header: React.FC = () => {
	const { currentUser } = useSelector((state: State) => state.user)
	const { hidden } = useSelector((state: State) => state.cart)
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/contact">CONTACT</OptionLink>
				{currentUser ? (
					<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
				) : (
					<OptionLink to="/signin">SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	)
}

export default Header
