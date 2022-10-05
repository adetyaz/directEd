import React from 'react'

const DropDown = () => {
	return (
		<div className='dropdown'>
			<h3>Select an Option</h3>
			<hr />
			<ul className='dropwdown__items'>
				<li className='dropdown__list'>MetaMask</li>
				<li className='dropdown__list'>Coinbase</li>
				<li className='dropdown__list'>TrustWallet</li>
			</ul>
		</div>
	)
}

export default DropDown
