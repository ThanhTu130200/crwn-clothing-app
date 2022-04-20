import React from "react"
import StripeCheckout from "react-stripe-checkout"

type Props = {
	price: number
}

const StripeButton: React.FC<Props> = ({ price }) => {
	const priceForStripe = price * 100
	const publicShableKey =
		"pk_live_51Kljh1BZQTng4389suQvHAsC8tHklmNDEhMPPMDqZulgQDnyXpO3yEQ7hga4gwU6Vbqdh7o3HkTiJBQDwGZe6XKg00Ot4fXTed"
	const onToken = (token: any) => {
		console.log(token)
		alert("Payment Successful")
	}

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publicShableKey}
		/>
	)
}

export default StripeButton
