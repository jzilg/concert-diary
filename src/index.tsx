import React from 'react'
import { render } from 'react-dom'
import store from './redux/store'
import Root from './containers/Root'
import 'embellish.css'
import './global.css'

render(<Root store={store} />, document.getElementById('root'))
