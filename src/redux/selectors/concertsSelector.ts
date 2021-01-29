import { State } from '../reducers/rootReducer'
import { ConcertsState } from '../reducers/concertsReducer'

function concertsSelector(state: State): ConcertsState {
    return state.concerts
}

export default concertsSelector
