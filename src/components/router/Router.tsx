import React, { ReactElement } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import history from '../../history'
import LoginForm from '../../containers/LoginFormContainer'
import ConcertsView from '../concerts-view'
import EditConcert from '../../containers/EditConcertContainer'
import FestivalsView from '../festivals-view'
import EditFestival from '../../containers/EditFestivalContainer'
import Statistics from '../../containers/StatisticsContainer'
import NewConcert from '../../containers/NewConcertContainer'

function Router(): ReactElement {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={ConcertsView} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/concerts" component={ConcertsView} />
                <Route exact path="/concerts/new" component={NewConcert} />
                <Route exact path="/concerts/edit" component={EditConcert} />
                <Route exact path="/festivals" component={FestivalsView} />
                <Route exact path="/festivals/edit" component={EditFestival} />
                <Route exact path="/statistics" component={Statistics} />
                <Route render={() => <h1>404 Not Found</h1>} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router
