import React, { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { auth, createUserProfileDocument } from "../../firebase/firebase"
import "./SignUp.scss"

function SignUp() {
	const [state, setState] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	})

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const { displayName, email, password, confirmPassword } = state

		if (password !== confirmPassword) {
			alert("Password don't match")
			return
		}

		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password)

			await createUserProfileDocument(user, { displayName })

			setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			})
		} catch (error) {
			console.error(error)
		}
	}

	const handleChange = (event: any) => {
		const { name, value } = event.target

		setState({
			...state,
			[name]: value,
		})
	}
	return (
		<div className="signup">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={state.displayName}
					handleChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={state.email}
					handleChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={state.password}
					handleChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={state.confirmPassword}
					handleChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	)
}

export default SignUp
