import React, { render } from 'preact'
import store from './redux/store'
import history from './history'
import Root from './containers/RootContainer'
import 'embellish.css'
import './global.scss'
import 'preact/devtools'

render(<Root store={store} history={history} />, document.getElementById('root') as Element)
