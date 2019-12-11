import State from '../State'

function isAuthenticatedSelector(state: State): boolean {
    return state.webtoken !== ''
}

export default isAuthenticatedSelector
