import type { FC } from 'preact/compat'
import React from 'preact/compat'
import type { Store } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import { ConnectedRouter as RouterProvider } from 'connected-react-router'
import type { History } from 'history'
import Loader from '../loader'
import NotificationsList from '../notification-list'
import Router from '../router'
import style from './root.module.scss'
import useOnMount from '../../hooks/useOnMount'

export type Props = {
    store: Store
    history: History
    pageRendered: () => void
    pageIsRendered: boolean
}

const Root: FC<Props> = (props) => {
    const {
        store,
        history,
        pageRendered,
        pageIsRendered,
    } = props

    useOnMount(() => {
        pageRendered()
    })

    const content = (pageIsRendered) ? (
        <div className={style.container}>
            <NotificationsList />
            <Router />
        </div>
    ) : null

    return (
        <ReduxProvider store={store}>
            <Loader />
            <RouterProvider history={history}>
                {content}
            </RouterProvider>
        </ReduxProvider>
    )
}

export default Root
