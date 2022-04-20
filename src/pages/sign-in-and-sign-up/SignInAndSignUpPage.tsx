import React from "react"
import "./SignInAndSignUpPage.scss"
import SignIn from "../../components/sign-in/SignIn"
import SignUp from "../../components/sign-up/SignUp"

const SignInAndSignUp: React.FC = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	)
}

export default SignInAndSignUp
