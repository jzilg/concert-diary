import State from '../State'

function routeIsLoginSelector(state: State): boolean {
    return state.router.location.pathname === '/login'
}

export default routeIsLoginSelector
