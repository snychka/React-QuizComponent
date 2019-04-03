import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//import Quiz from './Quiz'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
//ReactDOM.render(<Quiz />, document.getElementById('root'))
registerServiceWorker()
