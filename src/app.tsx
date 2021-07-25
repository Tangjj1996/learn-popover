import React, { useEffect, useRef } from 'react'
import { createPopper } from '@popperjs/core'
import './app.scss'

const App: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>()
  const tooltipRef = useRef<HTMLDivElement>()

  useEffect(() => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: 'right',
    })
  }, [])
  return (
    <div className="app">
      <button className="app__btn" ref={btnRef}>
        click me
      </button>
      <div className="app__tooltip" ref={tooltipRef}>
        tooltip
      </div>
    </div>
  )
}

export default App
