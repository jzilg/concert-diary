import { createSelector } from 'reselect'
import routerSelector from './routerSelector'

const routeIsLoginSelector = createSelector(
    routerSelector,
    (router): boolean => router.location.pathname === '/login',
)

export default routeIsLoginSelector
