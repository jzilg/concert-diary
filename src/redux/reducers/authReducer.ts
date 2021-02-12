import { createReducer } from 'typesafe-actions'
import { resetApiTokenState, setApiTokenOnState } from '../actions/app/auth.actions'

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
    .handleAction(resetApiTokenState, (state) => ({
        ...state,
        apiToken: defaultState.apiToken,
    }))

export default authReducer
