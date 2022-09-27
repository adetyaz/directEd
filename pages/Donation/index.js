import Head from 'next/head'
import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'
import { useState } from 'react'
import { Header, Footer } from '../../components'
import Button from '../../components/Button'
import SelectButton from '../../components/SelectButton'
import CaretLeftIcon from '../../icons/CaretLeftIcon'

const Donation = ({ router }) => {
	const { title } = router.query
	const donateRouter = useRouter()

	const [donatedAmount, setDonatedAmount] = useState('')

	const donationRates = [
		{
			id: 1,
			amount: '₳1000',
		},
		{
			id: 2,
			amount: '₳500',
		},
		{
			id: 3,
			amount: '₳100',
		},
		{
			id: 4,
			amount: 'custom',
		},
	]

	const handleChange = (donation) => {
		setDonatedAmount(donation.amount)
	}

	const donate = () => {
		donateRouter.push({
			pathname: '/confirmation',
		})
	}

	return (
		<>
			<Head>
				<title>DirectEd - Transactions</title>
				<meta name='description' content='Donation page on Direct Ed' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Header button='$directEd' />
			<main>
				<section className='donation'>
					<div className='donation__banner'></div>
					<div className='donation__head'>
						<Link href='/'>
							<a className='previous-page'>
								<CaretLeftIcon />
								<span>Back to pool</span>
							</a>
						</Link>
						<h1>Donate to {title}</h1>
					</div>
				</section>
				<h2>Select Donation Amount</h2>
				<div className='donation__options'>
					<SelectButton donationRates={donationRates} onChange={handleChange} />
				</div>

				<Button
					disabled={donatedAmount?.length > 0 ? false : true}
					onClick={donate}
					variant='primary'
					centered
				>
					donate
				</Button>
			</main>
			<Footer />
		</>
	)
}

export default withRouter(Donation)
