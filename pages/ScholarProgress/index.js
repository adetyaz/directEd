import Head from 'next/head'
import { Header, Footer, ScholarCard } from '../../components'
import { DATA } from '../../lib/studentData/data'
import React from 'react'

const ScholarProgress = () => {
	return (
		<>
			<Head>
				<title>DirectEd - Scholar's Progress</title>
				<meta
					name='description'
					content="Scholar's progress page on Direct Ed"
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Header buttonText='$directEd' />
			<main>
				<h1>Scholar's Progress</h1>
				<h2>Progress Track for Kagumo High School</h2>
				<ScholarCard data={DATA} />
			</main>
			<Footer />
		</>
	)
}

export default ScholarProgress
