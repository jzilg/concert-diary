import React, { ReactElement } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import history from '../history'
import ShowConcerts from '../containers/ShowConcerts'
import EditConcert from '../containers/EditConcert'
import ShowFestivals from '../containers/ShowFestivals'
import EditFestival from '../containers/EditFestival'
import Statistics from '../containers/Statistics'

function Router(): ReactElement {
    return (
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
    )
}

export default Router
