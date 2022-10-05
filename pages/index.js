import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import { Card, Footer, Header, Modal } from '../components'
import Dialog from '../components/Dialog'

export default function Home() {
	const modalRef = useRef()
	const openModal = () => modalRef.current.openModal()

	useEffect(() => {
		/***
		 *
		 * In the normal use case when can use the user seesion to verify if they have seen the dialog before, then it pops up when we haven't
		 *
		 * **/
		openModal()
	}, [])

	return (
		<>
			<Head>
				<title>DirectEd - Scholarship Pools</title>
				<meta name='description' content='Scholarship Pool page on Direct Ed' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Header />
			<main>
				<h1 onClick={openModal}> Scholarship Pools</h1>
				<section className='cards'>
					<Card />
				</section>
			</main>
			<Footer />
			<Modal ref={modalRef} dark>
				<Dialog />
			</Modal>
		</>
	)
}
