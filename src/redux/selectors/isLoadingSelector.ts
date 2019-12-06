import State from '../types/State'

function isLoadingSelector(state: State): boolean {
    return state.loadingCount > 0
}

export default isLoadingSelector
