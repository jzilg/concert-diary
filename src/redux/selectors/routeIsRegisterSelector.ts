import { createSelector } from 'reselect'
import routerSelector from './routerSelector'

const routeIsRegisterSelector = createSelector(
    routerSelector,
    (router): boolean => router.location.pathname === '/register',
)

export default routeIsRegisterSelector
