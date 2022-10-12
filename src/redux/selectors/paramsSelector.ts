import { createSelector } from 'reselect'
import type { ParsedQuery } from 'query-string'
import { parse } from 'query-string'
import routerSelector from './routerSelector'

const paramsSelector = createSelector(
    routerSelector,
    (router): ParsedQuery => parse(router.location.search),
)

export default paramsSelector
