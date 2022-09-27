import Head from 'next/head'
import { Header, Footer } from '../../components'

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
			<Header />
			<main>
				<h1>Scholar's Progress</h1>
			</main>
			<Footer />
		</>
	)
}

export default ScholarProgress
