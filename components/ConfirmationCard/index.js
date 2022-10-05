import React from 'react'

const ConfirmationCard = ({ data }) => {
	return (
		<div className='confirmation-card'>
			{data.map((cardItem) => (
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
