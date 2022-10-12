import type { State } from '../reducers/rootReducer'
import type { FestivalsState } from '../reducers/festivalsReducer'

const festivalsSelector = (state: State): FestivalsState => state.festivals

export default festivalsSelector
