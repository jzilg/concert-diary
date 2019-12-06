import State from '../State'

function isLoadingSelector(state: State): boolean {
    return state.loadingCount > 0
}

export default isLoadingSelector
