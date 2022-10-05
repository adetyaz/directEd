import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import CloseIcon from '../../icons/CloseIcon'

const Modal = forwardRef(({ children, dark, light }, ref) => {
	const [show, setShow] = useState(false)

	useImperativeHandle(ref, () => {
		return {
			openModal: () => openModal(),
			closeModal: () => closeModal(),
		}
	})

	const openModal = () => setShow(true)
	const closeModal = () => setShow(false)

	if (show) {
		return createPortal(
			<div className={`modal ${dark && 'dark'} ${light && 'light'} `}>
				<div className='modal__card '>
					<div className='modal__head'>
						<CloseIcon className='modal__close' onClick={closeModal} />
					</div>
					{children}
				</div>
			</div>,
			document.getElementById('modal-root')
		)
	}

	return null
})

export default Modal
