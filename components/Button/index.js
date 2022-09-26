const Button = ({ children, variant, centered }) => {
	return (
		<button className={`button ${variant} ${centered && 'centered'} `}>
			{children}
		</button>
	)
}

export default Button
