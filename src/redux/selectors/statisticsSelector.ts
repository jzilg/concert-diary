import { State } from '../reducers/rootReducer'
import { StatisticsState } from '../reducers/statisticsReducer'

function statisticsSelector(state: State): StatisticsState {
    return state.statistics
}

export default statisticsSelector
