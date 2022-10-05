import React from 'react'

const CloseIcon = ({ onClick, className }) => {
	return (
		<svg
			width='35'
			height='35'
			viewBox='0 0 35 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			onClick={onClick}
			className={className}
		>
			<path
				d='M27.7087 9.34788L25.6524 7.29163L17.5003 15.4437L9.34824 7.29163L7.29199 9.34788L15.4441 17.5L7.29199 25.652L9.34824 27.7083L17.5003 19.5562L25.6524 27.7083L27.7087 25.652L19.5566 17.5L27.7087 9.34788Z'
				fill='black'
				fillOpacity='0.87'
			/>
		</svg>
	)
}

export default CloseIcon
