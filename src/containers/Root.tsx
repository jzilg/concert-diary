import React, { ReactElement } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import history from '../history'
import App from './App'

interface Props {
    store: Store
}

const Root = ({ store }: Props): ReactElement => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" render={() => <App />} />
                <Route render={() => <h1>404 Not Found</h1>} />
            </Switch>
        </ConnectedRouter>
    </Provider>
)

export default Root
