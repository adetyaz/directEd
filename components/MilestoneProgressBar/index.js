import React from 'react'

const MilestoneProgressBar = ({ progressLevel, className }) => {
	return (
		<div className={`milestone milestone-wrapper ${className}`}>
			<div
				className='milestone__line'
				style={{ width: `${progressLevel}%` }}
			></div>

			<div className='milestone__gap milestone__gap--1'></div>
			<div className='milestone__gap milestone__gap--2'></div>
			<div className='milestone__gap milestone__gap--3'></div>
			<div className='milestone__gap milestone__gap--4'></div>
		</div>
	)
}

export default MilestoneProgressBar
