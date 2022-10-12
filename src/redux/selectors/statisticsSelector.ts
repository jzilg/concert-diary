import type { State } from '../reducers/rootReducer'
import type { StatisticsState } from '../reducers/statisticsReducer'

const statisticsSelector = (state: State): StatisticsState => state.statistics

export default statisticsSelector
