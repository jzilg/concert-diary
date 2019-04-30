import React, { Fragment, ReactElement } from 'react'
import { Store } from 'redux'
import { connect, Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import State from '../redux/interfaces/state.interface'
import history from '../history'
import ShowConcerts from './ShowConcerts'
import EditConcert from './EditConcert'
import ShowFestivals from './ShowFestivals'
import EditFestival from './EditFestival'
import Statistics from './Statistics'
import Loader from '../components/Loader'

interface Props extends StateProps {
    store: Store
}

function Root(props: Props): ReactElement {
    const { store, isLoading } = props
    const loadingElement = isLoading ? <Loader /> : null

    return (
        <Fragment>
            {loadingElement}
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
        </Fragment>
    )
}

interface StateProps {
    isLoading: boolean
}

const mapStateToProps = (state: State): StateProps => ({
    isLoading: state.ui.isLoading,
})

export default connect(mapStateToProps)(Root)
