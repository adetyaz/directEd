import Button from '../Button'
import Navigation from '../Navigation'

const Header = () => {
	return (
		<header className='header'>
			<img src='/assets/logo.png' alt='logo' />
			<Navigation />
			<Button>connect wallet</Button>
		</header>
	)
}

export default Header
