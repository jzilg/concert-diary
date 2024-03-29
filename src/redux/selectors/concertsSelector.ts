import type { State } from '../reducers/rootReducer'
import type { ConcertsState } from '../reducers/concertsReducer'

const concertsSelector = (state: State): ConcertsState => state.concerts

export default concertsSelector
