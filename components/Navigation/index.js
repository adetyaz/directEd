import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation = () => {
	const route = useRouter()

	return (
		<nav className='nav'>
			<ul className='nav__items'>
				<li className='nav__list'>
					<Link href='/'>
						<a className={`nav__link ${route.pathname === '/' && 'active'}`}>
							scholarship pools
						</a>
						{/* useRouter allows us to know the pathname for what page we're on and 
						we can use to to apply properties to elements as we please. 
						In this instance and Active class to add an underline as an indicator to the user */}
					</Link>
				</li>
				<li className='nav__list'>
					<Link href='/scholarprogress'>
						<a
							className={`nav__link ${
								route.pathname === '/ScholarProgress' && 'active'
							}`}
						>
							scholar's progress
						</a>
					</Link>
				</li>
				<li className='nav__list'>
					<Link href='/transactions'>
						<a
							className={`nav__link ${
								route.pathname === '/Transactions' && 'active'
							}`}
						>
							transactions
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
