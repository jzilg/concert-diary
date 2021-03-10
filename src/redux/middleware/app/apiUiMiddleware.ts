import { Middleware } from 'redux'
import { push } from 'connected-react-router'
import { increaseLoaderCount, decreaseLoaderCount } from '../../actions/core/loadingCount.actions'
import { createNotification } from '../../actions/core/notifications.actions'
import routeIsLoginSelector from '../../selectors/routeIsLoginSelector'
import { AsyncActionType } from '../../apiHandler'

const apiUiMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

    if (action.meta?.asyncActionType === AsyncActionType.Request) {
        const { causedBy } = action.meta

        dispatch(increaseLoaderCount(undefined, { causedBy }))
    }

    if (action.meta?.asyncActionType === AsyncActionType.Success) {
        const { causedBy } = action.meta

        dispatch(decreaseLoaderCount(undefined, { causedBy }))
    }

    if (action.meta?.asyncActionType === AsyncActionType.Failure) {
        const { causedBy } = action.meta
        const { error } = action.payload

        dispatch(decreaseLoaderCount(undefined, { causedBy }))

        if (error.status !== 401) {
            dispatch(createNotification({
                type: 'error',
                message: error.message,
            }, {
                causedBy,
            }))
        }

        const routeIsLogin = routeIsLoginSelector(getState())

        if (!routeIsLogin && error.status === 401) {
            dispatch(createNotification({
                type: 'error',
                message: 'Session expired',
            }, {
                causedBy,
            }))

            dispatch(push('/login'))
        }
    }
}

export default apiUiMiddleware
