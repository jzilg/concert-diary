import { State } from '../reducers/rootReducer'
import { ConcertsState } from '../reducers/concertsReducer'

const concertsSelector = (state: State): ConcertsState => state.concerts

export default concertsSelector
