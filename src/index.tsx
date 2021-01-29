import React, { render } from 'preact'
import store from './redux/store'
import history from './history'
import Root from './containers/RootContainer'
import 'embellish.css'
import './global.scss'

if (process.env.NODE_ENV === 'development') {
    import('preact/debug')
}

render(<Root store={store} history={history} />, document.getElementById('root') as Element)
