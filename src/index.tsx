import React from 'react'
import { render } from 'react-dom'
import store from './redux/store'
import Root from './containers/Root'

render(<Root store={store} />, document.getElementById('root'))
