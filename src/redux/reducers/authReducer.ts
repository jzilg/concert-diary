import { createReducer } from 'typesafe-actions'
import { setApiTokenOnState } from '../actions/app/auth.actions'

export type AuthState = {
    apiToken: string
}

const defaultState: AuthState = {
    apiToken: '',
}

const authReducer = createReducer(defaultState)
    .handleAction(setApiTokenOnState, (state, action) => ({
        ...state,
        apiToken: action.payload,
    }))

export default authReducer
