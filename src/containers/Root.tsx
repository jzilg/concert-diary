import React, { ReactElement } from 'react'
import { Store } from 'redux'
import { connect, Provider } from 'react-redux'
import State from '../redux/interfaces/State'
import { Notifications } from '../entities/Notification'
import isLoadingSelector from '../redux/selectors/isLoadingSelector'
import { deleteNotification } from '../redux/actions/core/ui.actions'
import Loader from '../components/loader'
import NotificationsList from '../components/notification-list'
import Router from '../components/router'

type Props = StateProps & DispatchProps & {
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
        <Provider store={store}>
            {loadingElement}
            {notificationListElement}
            <Router />
        </Provider>
    )
}

type StateProps = {
    isLoading: boolean
    notifications: Notifications
}

const mapStateToProps = (state: State): StateProps => ({
    isLoading: isLoadingSelector(state),
    notifications: state.ui.notifications,
})

type DispatchProps = {
    removeNotification: Function
}

const mapDispatchToProps = {
    removeNotification: deleteNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
