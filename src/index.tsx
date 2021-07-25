import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.getElementById('app'))

if (module) {
  module.hot.accept('./app', () => {
    import('./app').then((res) => {
      const App = res.default
      ReactDOM.render(<App />, document.getElementById('app'))
    })
  })
}
