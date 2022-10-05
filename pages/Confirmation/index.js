import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { ConfirmationCard, Footer, Header } from '../../components'
import Button from '../../components/Button'
import { DATA } from '../../lib/confirmationData/data'

const Confirmation = () => {
	const router = useRouter()
	const [buttonProcessingState, setButtonProcessingState] = useState(false)

	/***
	 * We are creating a button state that changes after the user confirms
	 * and the button state goes to processing which has a function that lets them get to the thank you page
	 * */

	const toggleButtonState = () => setButtonProcessingState(true)
	const confirmPayment = async () => {
		router.push(
			'/thank-you'
			/***
			 * router.push allows us to send data along as a query to the next page, we can conditionally assert that the page should
			 * only be redirect after success, the should hold some data like the user email.
			 *
			 * On the thank you page, the email being sent logic will submit it to and send to email.
			 *
			 * This logic can vary in use especially when using a state management tool
			 *
			 * **/
		)

		/***
		 * Simulating the logic to send a receipt to the users
		 *
		 * I imagine data will the data will be generated and
		 * sent to the page similar to the way it has been sent to confirmation card
		 *
		 *
		 * /Using fetch, we could also use axios/
		 * const config = {
		 *  method: 'POST',
		 *
		 *  headers: {
		 * 		Content-Type: 'application/json',
		 * 		Authorization: apiKey
		 * 	},
		 *
		 *  body: JSON.stringify(DATA)
		 *
		 * }
		 *
		 *  const response = await fetch('ROOT_URL', config)
		 * 	const result = await response.json()
		 *
		 *  return result.data
		 *	/Note that the return value will be dependent on how we want the return data to be./
		 *
		 *
		 * */
	}

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
				<ConfirmationCard data={DATA} />
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
