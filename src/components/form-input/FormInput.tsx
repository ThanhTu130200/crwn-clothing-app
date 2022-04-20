import React from "react"
import "./FormInput.scss"

type Props = {
	label: string
	name: string
	type: string
	value: string
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	required?: boolean
}

const FormInput: React.FC<Props> = ({ handleChange, label, value, ...otherProps }) => {
	return (
		<div className="group">
			<input className="form-input" value={value} onChange={handleChange} {...otherProps} />
			{label ? (
				<label className={`${value.length ? "shrink" : ""} form-input-label`}>
					{label}
				</label>
			) : null}
		</div>
	)
}

export default FormInput
