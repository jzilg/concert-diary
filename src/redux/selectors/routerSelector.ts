import { RouterState } from 'connected-react-router'
import State from '../State'

function routerSelector(state: State): RouterState {
    return state.router
}

export default routerSelector
