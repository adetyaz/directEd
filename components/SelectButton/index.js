import { useState } from 'react'

const SelectButton = ({ donationRates, onChange }) => {
	const [active, setActive] = useState(0)

	const toggleActiveButton = (donation) => {
		onChange(donation)
		setActive(donation.id)
	}

	return (
		<>
			{donationRates.map((donation) => (
				<div
					className={`select-button  ${active === donation.id && 'active'}`}
					onClick={() => toggleActiveButton(donation)}
					key={donation.id}
				>
					{donation.amount}
				</div>
			))}
		</>
	)
}

export default SelectButton
