import React, { useState } from 'react'
import CaretBottomIcon from '../../icons/CaretBottomIcon'
import CaretRightIcon from '../../icons/CaretRightIcon'
import LinkedinLogoIcon from '../../icons/LinkedinLogoIcon'
import LocationIcon from '../../icons/LocationIcon'
import TelegramLogoIcon from '../../icons/TelegramLogoIcon'
import MilestoneProgressBar from '../MilestoneProgressBar'

const ScholarCardItem = ({ studentData }) => {
	const [showDetails, setShowDetails] = useState(0)

	const toggleShowDetails = (student) => {
		setShowDetails(student.id)
	}

	const closeDetails = (student) => {
		const initialState = showDetails - student.id
		setShowDetails(initialState)
		console.log(showDetails - student.id)
		console.log(showDetails)
	}

	return (
		<>
			{studentData?.map((student) => (
				<div className='scholar-card__content' key={student.id}>
					<div className='scholar-card__student'>
						<div className='scholar-card__student--info'>
							<img
								src={student.image}
								alt='student image'
								className='scholar-card__image'
							/>
							<p>{student.name}</p>
						</div>
						<MilestoneProgressBar
							className='scholar-card__milestone'
							progressLevel={student.progressLevel}
						/>
						<div
							onClick={() => toggleShowDetails(student)}
							className='scholar-card__toggle'
						>
							{showDetails === student.id && (
								<>
									<a>Close</a>
									<CaretBottomIcon />
								</>
							)}
							{showDetails !== student.id && (
								<>
									<a>More</a>
									<CaretRightIcon />
								</>
							)}
						</div>
					</div>
					{showDetails === student.id && (
						<article className='scholar-card__student-details'>
							<div>
								<LocationIcon />
								<span>{student.location}</span>
							</div>
							<p>{student.userDetails}</p>
							<div className='scholar-card__student-links'>
								<a>{`${student.userWebsite}`}</a>
								<div>
									<LinkedinLogoIcon />
									<TelegramLogoIcon />
								</div>
							</div>
						</article>
					)}
				</div>
			))}
		</>
	)
}

export default ScholarCardItem
