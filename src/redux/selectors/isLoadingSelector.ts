import { State } from '../reducers/rootReducer'

const isLoadingSelector = (state: State): boolean => state.loadingCount > 0

export default isLoadingSelector
