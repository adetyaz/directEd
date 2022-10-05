import React from 'react'

const Inputfield = ({ placeholder, type, ...props }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			{...props}
			className='input-field'
		/>
	)
}

export default Inputfield
