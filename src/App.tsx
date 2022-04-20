import React, { useEffect, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"

import { State } from "../src/redux/rootReducer"

import "./App.css"
import HomePage from "./pages/homepage/HomePage"
import ShopPage from "./pages/shop/ShopPage"
import Checkout from "./pages/checkout/Checkout"
import Header from "./components/header/Header"

import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUpPage"
import { auth, createUserProfileDocument } from "./firebase/firebase"
import { onSnapshot } from "firebase/firestore"
import { setCurrentUser } from "./redux/user/userActions"

const HatsPage = () => (
	<div>
		<div>HATS PAGE</div>
	</div>
)

const App: React.FC = () => {
	const dispatch = useDispatch()
	const setUser = bindActionCreators(setCurrentUser, dispatch)
	const state = useSelector((state: State) => state.user.currentUser)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth, null)
				if (userRef) {
					onSnapshot(userRef, (snapshot: any) => {
						setUser({
							id: snapshot.id,
							...snapshot.data(),
						})
					})
				}
			} else setUser(userAuth)
		})

		return () => unsubscribe()
	}, [])

	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop/*" element={<ShopPage />} />
				<Route path="/hats" element={<HatsPage />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route
					path="/signin"
					element={state ? <Navigate replace to="/" /> : <SignInAndSignUp />}
				/>
			</Routes>
		</div>
	)
}

export default App
