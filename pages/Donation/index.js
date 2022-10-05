import Head from 'next/head'
import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'
import React, { useState, useRef } from 'react'
import { Header, Footer, Modal } from '../../components'
import Button from '../../components/Button'
import Inputfield from '../../components/Inputfield'
import SelectButton from '../../components/SelectButton'
import CaretLeftIcon from '../../icons/CaretLeftIcon'

const Donation = ({ router }) => {
	const { title } = router.query
	const donateRouter = useRouter()
	const modalRef = useRef()

	const [showButtonInput, setShowButtonInput] = useState(false)
	const [donatedAmount, setDonatedAmount] = useState('')
	const [customAmount, setCustomAmount] = useState('')
	const [nftGift, setNftGift] = useState({
		showGift: false,
		amount: '',
		convertedAda: '',
		totalFees: '',
		image: '',
	})

	const { amount, convertedAda, totalFees, showGift, image } = nftGift

	const openModal = () => modalRef.current.openModal()

	const donationRates = [
		{
			id: 1,
			amount: '₳1000',
			convertedAda: '337238842192374 ADA',
			totalFees: '$0.47473838299373744857584999373494',
			image: '/assets/nft-gift.png',
		},
		{
			id: 2,
			amount: '₳500',
			convertedAda: '337238842192374 ADA',
			totalFees: '$0.47473838299373744857584999373494',
			image: '/assets/nft-gift.png',
		},
		{
			id: 3,
			amount: '₳100',
			convertedAda: '337238842192374 ADA',
			totalFees: '$0.47473838299373744857584999373494',
			image: '/assets/nft-gift.png',
		},
		{
			id: 4,
			amount: 'custom',
		},
	]

	/***
	 *
	 * We are sending out donation rates to the selected button component,
	 * which maps out the data allows users to select an option
	 *
	 * **/

	const handleChange = (donation) => {
		if (donation.amount === 'custom') {
			setShowButtonInput(true)
		} else {
			setDonatedAmount(donation.amount)
			setNftGift({
				showGift: true,
				amount: donation.amount,
				convertedAda: donation.convertedAda,
				totalFees: donation.totalFees,
				image: donation.image,
			})
			setShowButtonInput(false)
		}
	}

	const handleAmountChange = (e) => {
		setCustomAmount(e.target.value)
	}

	const submitCustomAmount = (e) => {
		e.preventDefault()
		setDonatedAmount(customAmount)
		setNftGift({
			showGift: false,
		})
		setTimeout(() => {
			setShowButtonInput(false)
		}, 1000)
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
			<Header buttonText='$directEd' />
			<main>
				<div className='donation__banner'></div>
				<section className='donation'>
					<div className='donation__head'>
						<Link href='/'>
							<a className='previous-page'>
								<CaretLeftIcon />
								<span>Back to pool</span>
							</a>
						</Link>
						<h1>Donate to {title}</h1>
					</div>

					<h2>Select Donation Amount</h2>
					<div className='donation__options'>
						<SelectButton
							donationRates={donationRates}
							onChange={handleChange}
						/>
					</div>
					{showButtonInput && (
						<div className='donation__form'>
							<Inputfield
								type='text'
								placeholder='10,000'
								name='customAmount'
								value={customAmount}
								onChange={handleAmountChange}
							/>
							<Button onClick={submitCustomAmount}> Submit</Button>
						</div>
					)}

					{showGift === true && (
						<div className='donation__gifts'>
							<p> Amount: {amount}</p>
							<p> Convert to ADA:{convertedAda}</p>
							<p>Total fees:{totalFees}</p>

							<img
								src={image}
								alt='nft gift image'
								className='donation__gifts--image donation__gifts--image-small'
								onClick={openModal}
							/>
							<Modal ref={modalRef}>
								<img
									src={image}
									alt='nft gift image'
									className='donation__gifts--image donation__gifts--image-large'
								/>
							</Modal>
							<p className='donation__gifts--image-text'>
								Click to view the exclusive NFT you will receive with your
								donation
							</p>
						</div>
					)}
					<Button
						disabled={donatedAmount?.length > 0 ? false : true}
						onClick={donate}
						variant='primary'
						centered
					>
						donate
					</Button>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default withRouter(Donation)
