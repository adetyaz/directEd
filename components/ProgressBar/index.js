import ClockIcon from '../../icons/ClockIcon'

const ProgressBar = ({ time, amount, amountLeft, people, progressLevel }) => {
	/***
	 * We popuate the progressbara component with data sent as props from the card,
	 * when there's a change in data, it will be reflected in the progress bar component
	 *
	 * */

	return (
		<div className='progressbar-container'>
			<div className='progressbar-container__head'>
				<small>
					<ClockIcon />
					<span>{time} days left</span>
				</small>
				<span>{people} people have donated</span>
			</div>

			<div className='progressbar'>
				<span
					className='progressbar__level'
					style={{ width: `${progressLevel}%` }}
				></span>
			</div>
			<div className='progressbar-container__bottom'>
				<h3>${amount} Raised</h3>
				<p> -${amountLeft}</p>
			</div>
		</div>
	)
}

export default ProgressBar
