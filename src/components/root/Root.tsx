import React, { FunctionComponent } from 'preact/compat'
import { Store } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import Loader from '../../containers/LoaderContainer'
import NotificationsList from '../../containers/NotificationsListContainer'
import Router from '../router'
import style from './root.css'

type Props = {
    store: Store
}

const Root: FunctionComponent<Props> = (props) => {
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
