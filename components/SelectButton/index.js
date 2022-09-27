import { useState } from 'react'

const SelectButton = ({ donationRates, onChange }) => {
	const [active, setActive] = useState(0)

	const toggleActiveButton = (donation) => {
		onChange(donation)
		setActive(donation.id)
	}

	/****
	 *
	 * Using the id of the donation rates user can select the specific donation and the data will be sent along
	 * for confirmation
	 * **/

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
