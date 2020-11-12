import { createSelector } from 'reselect'
import { parse, ParsedQuery } from 'query-string'
import routerSelector from './routerSelector'

const paramsSelector = createSelector(
    routerSelector,
    (router): ParsedQuery => parse(router.location.search),
)

export default paramsSelector
