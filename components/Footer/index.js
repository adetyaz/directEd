import React from 'react'

import Link from 'next/link'
import Button from '../Button'

const Footer = () => {
	return (
		<footer className='footer'>
			<Link href='https://directed.dev'>
				<Button variant='secondary'>Need help?</Button>
			</Link>
			<Link href='https://directed.dev'>
				<Button variant='secondary'>have a suggestion? </Button>
			</Link>
			<span className='footer__copyright'>
				<small>Terms and Conditions | Privacy Policy </small>
				<small>© 2022 DirectEd. All rights reserved.</small>
			</span>
		</footer>
	)
}

export default Footer
