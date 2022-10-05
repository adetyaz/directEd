import React from 'react'
import Button from '../Button'
import Navigation from '../Navigation'
import Link from 'next/link'
import { useState } from 'react'
import DropDown from '../DropDown'

const Header = ({ buttonText }) => {
	const [showDropdown, setShowDropdown] = useState()
	const toggleDropdown = () => setShowDropdown(!showDropdown)

	return (
		<header className='header'>
			<Link href='https://directed.dev'>
				<img src='/assets/logo.png' alt='logo' className='logo' />
			</Link>
			<Navigation />
			<div>
				<Button onClick={toggleDropdown}>
					{buttonText ? buttonText : 'connect wallet'}
				</Button>

				{showDropdown && <DropDown />}
			</div>
			{/* Button on the header conditionally renders connect wallet by default and 
			when a header is on a page with a different button text,  it displays it instead of the default */}
		</header>
	)
}

export default Header
