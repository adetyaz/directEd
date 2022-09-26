import Button from '../Button'

const Footer = () => {
	return (
		<footer className='footer'>
			<Button variant='secondary'>Need help?</Button>
			<Button variant='secondary'>have a suggestion? </Button>
			<span className='footer__copyright'>
				<small>Terms and Conditions | Privacy Policy </small>
				<small>© 2022 DirectEd. All rights reserved.</small>
			</span>
		</footer>
	)
}

export default Footer
