import React from 'react'
import { render } from 'react-dom'
import store from './redux/store'
import Root from './components/root'
import 'embellish.css'
import './global.scss'

render(<Root store={store} />, document.getElementById('root'))
