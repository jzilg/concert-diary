import React, { ReactElement } from 'react'
import { Store } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import Loader from '../../containers/LoaderContainer'
import NotificationsList from '../../containers/NotificationsListContainer'
import Router from '../router'

type Props = {
    store: Store
}

function Root(props: Props): ReactElement {
    const { store } = props

    return (
        <ReduxProvider store={store}>
            <Loader />
            <NotificationsList />
            <Router />
        </ReduxProvider>
    )
}

export default Root
