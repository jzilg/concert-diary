import React, { ReactElement } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

interface Props {
    store: Store
}

const Root = ({ store }: Props): ReactElement => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Root
