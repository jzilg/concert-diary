import MiddlewareCreator from '../../interfaces/middleware-creator.interface'
import Action from '../../interfaces/action.interface'
import { API_REQUEST, API_SUCCESS, API_ERROR } from '../../actions/core/api.actions'
import { setLoader } from '../../actions/core/ui.actions'

const apiUiMiddleware = ({ dispatch }): MiddlewareCreator => next => (action: Action) => {
    next(action)

    if (action.type.includes(API_REQUEST)) {
        dispatch(setLoader(true, action.type))
    }

    if (action.type.includes(API_SUCCESS) || action.type.includes(API_ERROR)) {
        dispatch(setLoader(false, action.type))
    }
}

export default apiUiMiddleware
