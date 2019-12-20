import React, { ReactElement } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import history from '../../history'
import LoginForm from '../../containers/LoginFormContainer'
import ConcertsView from '../concerts-view'
import EditConcert from '../../containers/EditConcertContainer'
import ShowFestivals from '../../containers/ShowFestivals'
import EditFestival from '../../containers/EditFestival'
import Statistics from '../../containers/Statistics'

function Router(): ReactElement {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={ConcertsView} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/concerts" component={ConcertsView} />
                <Route exact path="/concerts/edit" component={EditConcert} />
                <Route exact path="/festivals" component={ShowFestivals} />
                <Route exact path="/festivals/edit/:id" component={EditFestival} />
                <Route exact path="/statistics" component={Statistics} />
                <Route render={() => <h1>404 Not Found</h1>} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router
