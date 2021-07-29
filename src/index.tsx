import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const root = document.createElement('div')
root.id = 'app'
document.body.appendChild(root)
ReactDOM.render(<App />, root)

if (module) {
	module.hot.accept('./app', () => {
		import('./app').then((res) => {
			const App = res.default
			ReactDOM.render(<App />, root)
		})
	})
}
