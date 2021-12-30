import { RouterState } from 'connected-react-router'
import { State } from '../reducers/rootReducer'

const routerSelector = (state: State): RouterState => state.router

export default routerSelector
