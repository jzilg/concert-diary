import { createSelector } from 'reselect'
import apiTokenSelector from './apiTokenSelector'

const apiTokenIsSetSelector = createSelector(
    apiTokenSelector,
    (apiToken): boolean => apiToken !== '',
)

export default apiTokenIsSetSelector
