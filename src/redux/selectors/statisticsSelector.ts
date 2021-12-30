import { State } from '../reducers/rootReducer'
import { StatisticsState } from '../reducers/statisticsReducer'

const statisticsSelector = (state: State): StatisticsState => state.statistics

export default statisticsSelector
