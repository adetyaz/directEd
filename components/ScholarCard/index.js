import ScholarCardItem from '../ScholarCardItem'
import React from 'react'

const ScholarCard = ({ data }) => {
	return (
		<div className='scholar-card'>
			<div className='scholar-card__head'>
				<p>Name</p>
				<p>Milestone progress</p>
				<p>Contact</p>
			</div>
			<ScholarCardItem studentData={data} />
		</div>
	)
}

export default ScholarCard
