import Head from 'next/head'
import { Header } from '../../components'
import Button from '../../components/Button'

const ThankYou = () => {
	return (
		<>
			<Head>
				<title>DirectEd - Thank you</title>
				<meta name='description' content='Thank you page on Direct Ed' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Header />
			<main>
				<div className='thanks-card'>
					<h2>Thank you for your donation to DirectEd</h2>
					<p>Your donation to Kagumo High School was confirmed. </p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<Button centered>View Progress</Button>
				</div>
			</main>
		</>
	)
}

export default ThankYou
