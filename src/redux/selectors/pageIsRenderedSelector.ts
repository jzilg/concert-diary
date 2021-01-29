import { State } from '../reducers/rootReducer'

function pageIsRenderedSelector(state: State): boolean {
    return state.page.isRendered
}

export default pageIsRenderedSelector
