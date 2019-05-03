import React, { Fragment, ReactElement } from 'react'
import { Store } from 'redux'
import { connect, Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import State from '../redux/interfaces/state.interface'
import { Notifications } from '../entities/Notification.interface'
import isLoadingSelector from '../redux/selectors/isLoadingSelector'
import { unsetNotification } from '../redux/actions/core/ui.actions'
import history from '../history'
import Loader from '../components/Loader'
import NotificationsList from '../components/NotificationsList'
import ShowConcerts from './ShowConcerts'
import EditConcert from './EditConcert'
import ShowFestivals from './ShowFestivals'
import EditFestival from './EditFestival'
import Statistics from './Statistics'

interface Props extends StateProps, DispatchProps {
    store: Store
}

function Root(props: Props): ReactElement {
    const {
        store,
        isLoading,
        notifications,
        removeNotification,
    } = props

    const loadingElement = isLoading ? <Loader /> : null
    const notificationListElement = notifications.length ? (
        <NotificationsList
            notifications={notifications}
            removeNotification={removeNotification}
        />
    ) : null

    return (
        <Fragment>
            {loadingElement}
            {notificationListElement}
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
    notifications: Notifications
}

const mapStateToProps = (state: State): StateProps => ({
    isLoading: isLoadingSelector(state),
    notifications: state.ui.notifications,
})

interface DispatchProps {
    removeNotification: Function
}

const mapDispatchToProps = {
    removeNotification: unsetNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
