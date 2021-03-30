import React, { FunctionComponent } from 'preact/compat'
import { Route, Switch } from 'react-router-dom'
import Header from '../header'
import LoginForm from '../login-form'
import ConcertsView from '../concerts-view'
import EditConcert from '../edit-concert'
import FestivalsView from '../festivals-view'
import EditFestival from '../edit-festival'
import Statistics from '../statistics'
import NewConcert from '../new-concert'
import NewFestival from '../new-festival'
import RegisterForm from '../register-form'

const Router: FunctionComponent = () => (
    <>
        <Switch>
            <Route exact path="/login" />
            <Route exact path="/register" />
            <Route component={Header} />
        </Switch>
        <Switch>
            <Route exact path="/" component={ConcertsView} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/concerts" component={ConcertsView} />
            <Route exact path="/concerts/new" component={NewConcert} />
            <Route exact path="/concerts/edit" component={EditConcert} />
            <Route exact path="/festivals" component={FestivalsView} />
            <Route exact path="/festivals/new" component={NewFestival} />
            <Route exact path="/festivals/edit" component={EditFestival} />
            <Route exact path="/statistics" component={Statistics} />
            <Route render={() => <h2>404 Not Found</h2>} />
        </Switch>
    </>
)

export default Router
