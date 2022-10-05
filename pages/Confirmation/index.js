import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { ConfirmationCard, Footer, Header } from '../../components'
import Button from '../../components/Button'

const Confirmation = () => {
	const router = useRouter()
	const [buttonProcessingState, setButtonProcessingState] = useState(false)

	/***
	 * We are creating a button state that changes after the user confirms
	 * and the button state goes to processing which has a function that lets them get to the thank you page
	 * */

	const toggleButtonState = () => setButtonProcessingState(true)
	const confirmPayment = () => router.push('/thank-you')

	return (
		<>
			<Head>
				<title>DirectEd - Confirmation</title>
				<meta name='description' content='Confirmation page on Direct Ed' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Header buttonText='$directEd' />
			<main>
				<h1>Confirmation</h1>
				<ConfirmationCard />
				<Button
					variant='primary'
					centered
					onClick={buttonProcessingState ? confirmPayment : toggleButtonState}
					/***
					 * The buttonProcessingState will let us run a function based on the condition we meet.
					 * */
				>
					{buttonProcessingState ? 'processing' : 'confirm'}
				</Button>
			</main>
			<Footer />
		</>
	)
}

export default Confirmation
