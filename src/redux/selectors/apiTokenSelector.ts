import { State } from '../reducers/rootReducer'

function apiTokenSelector(state: State): string {
    return state.auth.apiToken
}

export default apiTokenSelector
