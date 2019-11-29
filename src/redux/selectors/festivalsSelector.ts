import State from '../types/State'
import { FestivalsState } from '../reducers/festivalsReducer'

function festivalsSelector(state: State): FestivalsState {
    return state.festivals
}

export default festivalsSelector
