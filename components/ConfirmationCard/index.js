import React from 'react'

const ConfirmationCard = () => {
	const cardContent = [
		{
			itemName: 'From address',
			itemData: 'addr93d9wek0wewjewas34asd3er4refsdfdsf',
		},
		{
			itemName: 'Script hash',
			itemData: 'drewrfe4323423432432434sdasdds',
		},
		{
			itemName: 'ADA sent:',
			itemData: '500',
		},
		{
			itemName: 'Token received',
			itemData: 'asset4303asd',
		},
		{
			itemName: 'Total fees',
			itemData: '0.1634',
		},
		{
			itemName: 'Deadline:  ?',
			itemData: '11/23/24',
		},
	]

	return (
		<div className='confirmation-card'>
			{cardContent.map((cardItem) => (
				/**
				 * Like in the card component we map our data array to avoid repetition of elements
				 * and it simulates getting data from an api
				 * */
				<div className='confirmation-card__items' key={cardItem.itemName}>
					<p className='confirmation-card__item-name'>{cardItem.itemName}</p>
					<p className='confirmation-card__item-data'>{cardItem.itemData}</p>
				</div>
			))}
		</div>
	)
}

export default ConfirmationCard
