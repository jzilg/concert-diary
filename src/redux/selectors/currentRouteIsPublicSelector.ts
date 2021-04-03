import { createSelector } from 'reselect'
import routerSelector from './routerSelector'

const currentRouteIsPublicSelector = createSelector(
    routerSelector,
    (router): boolean => (
        router.location.pathname === '/login' || router.location.pathname === '/register'
    ),
)

export default currentRouteIsPublicSelector
