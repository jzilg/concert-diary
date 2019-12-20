import { createSelector } from 'reselect'
import { RouterState } from 'connected-react-router'
import { ParsedQuery, parse } from 'query-string'
import routerSelector from './routerSelector'

function getParams(router: RouterState): ParsedQuery {
    return parse(router.location.search)
}

const paramsSelector = createSelector(
    routerSelector,
    getParams,
)

export default paramsSelector
