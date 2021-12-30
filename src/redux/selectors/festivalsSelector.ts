import { State } from '../reducers/rootReducer'
import { FestivalsState } from '../reducers/festivalsReducer'

const festivalsSelector = (state: State): FestivalsState => state.festivals

export default festivalsSelector
