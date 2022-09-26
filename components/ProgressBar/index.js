import ClockIcon from '../../icons/ClockIcon'

const ProgressBar = ({ time, amount, amountLeft, people, progressLevel }) => {
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
