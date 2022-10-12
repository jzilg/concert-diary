import type { RouterState } from 'connected-react-router'
import type { State } from '../reducers/rootReducer'

const routerSelector = (state: State): RouterState => state.router

export default routerSelector
