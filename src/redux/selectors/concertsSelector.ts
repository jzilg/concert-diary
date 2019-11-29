import { ConcertsState } from '../reducers/concertsReducer'
import State from '../types/State'

function concertsSelector(state: State): ConcertsState {
    return state.concerts
}

export default concertsSelector
