import { createReducer } from 'typesafe-actions'
import { setWebtokenOnState } from '../actions/app/auth.actions'

export type WebtokenState = object

export const defaultState: WebtokenState = null

const webtokenReducer = createReducer(defaultState)
    .handleAction(
        setWebtokenOnState,
        (state, action) => action.payload,
    )

export default webtokenReducer
