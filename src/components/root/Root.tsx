import React, { ReactElement } from 'react'
import { Store } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import Loader from '../../containers/LoaderContainer'
import NotificationsList from '../../containers/NotificationsListContainer'
import Router from '../router'
import style from './root.css'

type Props = {
    store: Store
}

function Root(props: Props): ReactElement {
    const { store } = props

    return (
        <ReduxProvider store={store}>
            <Loader />
            <div className={style.container}>
                <NotificationsList />
                <Router />
            </div>
        </ReduxProvider>
    )
}

export default Root
