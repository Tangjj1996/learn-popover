import React, { useEffect, useRef } from 'react'
import { createPopper } from '@popperjs/core'
import './app.scss'

const App: React.FC = () => {
	const btnRef = useRef<HTMLButtonElement>()
	const tooltipRef = useRef<HTMLDivElement>()
	const wrapRef = useRef<HTMLDivElement>()

	useEffect(() => {
		createPopper(btnRef.current, tooltipRef.current, {
			placement: 'top-start',
		})
		wrapRef.current.scrollTo({
			top: 500,
			behavior: 'smooth',
		})
	}, [])
	return (
		<div className="app-wrap" ref={wrapRef}>
			<button className="app__button" ref={btnRef}>
				click me
			</button>
			<div className="app__tooltip" ref={tooltipRef}>
				tooltip
			</div>
		</div>
	)
}

export default App
