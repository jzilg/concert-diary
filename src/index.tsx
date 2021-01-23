import React, { render } from 'preact'
import store from './redux/store'
import Root from './components/root'
import 'embellish.css'
import './global.scss'

if (process.env.NODE_ENV === 'development') {
    import('preact/debug')
}

render(<Root store={store} />, document.body, document.getElementById('root') as Element)
