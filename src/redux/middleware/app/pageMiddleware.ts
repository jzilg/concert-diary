import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import { push } from 'connected-react-router'
import { pageRendered, setPageIsRenderedState } from '../../actions/app/page.actions'
import apiTokenIsSetSelector from '../../selectors/apiTokenIsSetSelector'
import currentRouteIsPublicSelector from '../../selectors/currentRouteIsPublicSelector'

const pageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)

    if (isActionOf(pageRendered, action)) {
        const apiTokenIsSet = apiTokenIsSetSelector(store.getState())
        const currentRouteIsPublic = currentRouteIsPublicSelector(store.getState())

        if (!apiTokenIsSet && !currentRouteIsPublic) {
            store.dispatch(push('/login'))
        }

        store.dispatch(setPageIsRenderedState(true))
    }
}

export default pageMiddleware
