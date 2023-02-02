import React, { render } from 'preact/compat'
import 'preact/devtools'
import 'embellish.css'
import store from './redux/store'
import history from './history'
import Root from './components/root'
import './global.scss'

console.log('Update successfully!')

render(<Root store={store} history={history} />, document.getElementById('root') as Element)
