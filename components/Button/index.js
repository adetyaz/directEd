import React from 'react'

const Button = React.forwardRef(
	({ children, variant, centered, disabled, ...props }, ref) => {
		/**
		 * We use the forwardRef hook from react to let us make use of the useRouter to navigation to other pages with parameters, it is required to ensure a smooth behaviour when navigating
		 *
		 *
		 * the button variant props lets us have a different button style based on the variant type used.
		 *
		 * the centered prop lets us center out button
		 * **/
		return (
			<button
				className={`button ${variant} ${centered && 'centered'} ${
					disabled && 'disabled'
				} `}
				disabled={disabled}
				{...props}
				ref={ref}
			>
				{children}
			</button>
		)
	}
)

export default Button
