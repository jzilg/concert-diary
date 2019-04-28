import React, { ReactElement } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import history from '../history'
import ShowConcerts from './ShowConcerts'
import EditConcert from './EditConcert'
import ShowFestivals from './ShowFestivals'
import EditFestival from './EditFestival'
import Statistics from './Statistics'

interface Props {
    store: Store
}

const Root = ({ store }: Props): ReactElement => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={ShowConcerts} />
                <Route exact path="/concerts" component={ShowConcerts} />
                <Route exact path="/concerts/edit/:id" component={EditConcert} />
                <Route exact path="/festivals" component={ShowFestivals} />
                <Route exact path="/festivals/edit/:id" component={EditFestival} />
                <Route exact path="/statistics" component={Statistics} />
                <Route render={() => <h1>404 Not Found</h1>} />
            </Switch>
        </ConnectedRouter>
    </Provider>
)

export default Root
