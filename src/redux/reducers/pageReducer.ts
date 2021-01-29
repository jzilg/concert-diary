import { createReducer } from 'typesafe-actions'
import { setPageIsRenderedState } from '../actions/app/page.actions'

export type PageState = {
    isRendered: boolean
}

export const defaultState: PageState = {
    isRendered: false,
}

const pageReducer = createReducer(defaultState)
    .handleAction(setPageIsRenderedState, (state, action) => ({
        ...state,
        isRendered: action.payload,
    }))

export default pageReducer
