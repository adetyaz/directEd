import Head from 'next/head'
import { Card, Footer, Header } from '../components'

export default function Home() {
	return (
		<>
			<Head>
				<title>DirectEd - Scholarship Pools</title>
				<meta name='description' content='Scholarship Pool page on Direct Ed' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Header />
			<main>
				<h1>Scholarship Pools</h1>
				<section className='cards'>
					<Card />
				</section>
			</main>
			<Footer />
		</>
	)
}
