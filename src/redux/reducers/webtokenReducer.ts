import { createReducer } from 'typesafe-actions'
import { setWebtokenOnState } from '../actions/app/auth.actions'

export type WebtokenState = string

export const defaultState: WebtokenState = ''

const webtokenReducer = createReducer(defaultState)
    .handleAction(
        setWebtokenOnState,
        (state, action) => action.payload,
    )

export default webtokenReducer
