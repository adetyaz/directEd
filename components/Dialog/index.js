import React from 'react'

import Button from '../Button'

const Dialog = () => {
	return (
		<div className='dialog-box '>
			<h2>How to donate</h2>
			<p className='dialog-box__text'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<p className='dialog-box__text'>
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat.
			</p>
			<p className='dialog-box__text'>
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

			<img
				src='/assets/video-dialog.png'
				alt='video placeholder'
				className='dialog-box__video-placeholder'
			/>
			<Button centered>Learn More</Button>
		</div>
	)
}

export default Dialog
