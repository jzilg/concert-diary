import type { State } from '../reducers/rootReducer'

const apiTokenSelector = (state: State): string => state.auth.apiToken

export default apiTokenSelector
