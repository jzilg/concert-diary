import React, { ReactElement } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import Loader from '../../containers/LoaderContainer'
import NotificationsList from '../../containers/NotificationsListContainer'
import Router from '../router'

type Props = {
    store: Store
}

function Root(props: Props): ReactElement {
    const { store } = props

    return (
        <Provider store={store}>
            <Loader />
            <NotificationsList />
            <Router />
        </Provider>
    )
}

export default Root
