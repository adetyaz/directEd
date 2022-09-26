import React from 'react'
import Button from '../Button'
import ProgressBar from '../ProgressBar'

const Card = () => {
	const cardContent = [
		{
			image: '/assets/kagumo-school.png',
			title: 'Kagumo High School',
			subtitle:
				'Located right next to the coast in Naivasha, Kenya, St. Peters is a high school with 125 years of history.',
			fundTitle: '23',
			fundText: 'Scholarships funded',
			nftAmount: '8/10',
			nftText: 'Exclusive NFT remain',
			time: '33',
			amount: '8,000',
			amountLeft: '3,500',
			people: '124',
			progressLevel: 70,
		},
		{
			image: '/assets/strathmore-school.png',
			title: 'Strathmore High School',
			subtitle:
				'Located right next to the coast in Naivasha, Kenya, St. Peters is a high school with 125 years of history.',
			fundTitle: '14',
			fundText: 'Scholarships funded',
			nftAmount: '6/10',
			nftText: 'Exclusive NFT remain',
			time: '33',
			amount: '3,000',
			amountLeft: '10,500',
			people: '125',
			progressLevel: 30,
		},
	]

	return (
		<>
			{cardContent.map((fund) => (
				<div className='card' key={fund.title}>
					<img
						src={fund.image}
						alt='donation recipient'
						className='card__image'
					/>
					<article className='card__content'>
						<h3 className='card__title'>{fund.title}</h3>
						<p className='card__subtitle'>{fund.subtitle}</p>
						<div className='card__funds'>
							<div>
								<h3 className='card__title card__fund-title'>
									{fund.fundTitle}
								</h3>
								<p className='card__fund-text'>{fund.fundText}</p>
							</div>
							<div>
								<h3 className='card__title card__fund-title'>
									{fund.nftAmount}
								</h3>
								<p className='card__fund-text'>{fund.nftText}</p>
							</div>
						</div>
						<hr />
						<ProgressBar
							time={fund.time}
							amount={fund.amount}
							amountLeft={fund.amountLeft}
							people={fund.people}
							progressLevel={fund.progressLevel}
						/>
						<Button variant='primary' centered>
							donate now
						</Button>
					</article>
				</div>
			))}
		</>
	)
}

export default Card
