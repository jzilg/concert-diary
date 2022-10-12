import type { State } from '../reducers/rootReducer'

const pageIsRenderedSelector = (state: State): boolean => state.page.isRendered

export default pageIsRenderedSelector
