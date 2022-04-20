import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"

import "./SignIn.scss"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { auth, signInWithGoogle } from "../../firebase/firebase"

const SignIn: React.FC = () => {
	const [info, setInfo] = useState({
		email: "",
		password: "",
	})

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const { email, password } = info

		try {
			await signInWithEmailAndPassword(auth, email, password)

			setInfo({
				email: "",
				password: "",
			})
		} catch (error) {
			console.error(error)
		}
	}
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target
		setInfo({ ...info, [name]: value })
	}
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					name="email"
					type="email"
					value={info.email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					label="Password"
					name="password"
					type="password"
					value={info.password}
					handleChange={handleChange}
					required
				/>
				<div className="button">
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

export default SignIn
