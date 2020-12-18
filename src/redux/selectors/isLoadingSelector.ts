import { State } from '../reducers/rootReducer'

function isLoadingSelector(state: State): boolean {
    return state.loadingCount > 0
}

export default isLoadingSelector
