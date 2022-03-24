import { Middleware } from 'redux'
import { push } from 'connected-react-router'
import { increaseLoaderCount, decreaseLoaderCount } from '../../actions/core/loadingCount.actions'
import { createNotification } from '../../actions/core/notifications.actions'
import routeIsLoginSelector from '../../selectors/routeIsLoginSelector'
import { isApiFailureAction, isApiRequestAction, isApiSuccessAction } from '../../apiHandler'
import routeIsRegisterSelector from '../../selectors/routeIsRegisterSelector'

const apiUiMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

    if (isApiRequestAction(action)) {
        const { causedBy } = action.meta

        dispatch(increaseLoaderCount(undefined, { causedBy }))
    }

    if (isApiSuccessAction(action)) {
        const { causedBy } = action.meta

        dispatch(decreaseLoaderCount(undefined, { causedBy }))
    }

    if (isApiFailureAction(action)) {
        const error = action.payload
        const { causedBy } = action.meta

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
        const routeIsRegister = routeIsRegisterSelector(getState())

        if (!(routeIsRegister || routeIsLogin) && error.status === 401) {
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
