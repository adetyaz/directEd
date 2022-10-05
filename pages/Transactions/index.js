import Head from 'next/head'
import { Header } from '../../components'
import React from 'react'

const Transactions = () => {
	return (
		<>
			<Head>
				<title>DirectEd - Transactions</title>
				<meta name='description' content='Transactions page on Direct Ed' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Header />
			<main>
				<h1>Transactions</h1>
			</main>
		</>
	)
}

export default Transactions
