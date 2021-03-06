import { createAction, createAsyncAction } from 'typesafe-actions'

export const login = createAction('CMD / Auth / login')<{ username: string; password: string }>()

export const authAsync = createAsyncAction(
    'EVT / Auth / login request',
    'EVT / Auth / login success',
    'EVT / Auth / login failure',
)<undefined, string, Error>()

export const setApiTokenOnState = createAction('DOC / Auth / set api token')<string>()

export const resetApiTokenState = createAction('DOC / Auth / reset api token')()

export const logout = createAction('CMD / Auth / logout')()

export const register = createAction('CMD / Auth / register')<{ username: string; password: string; token: string }>()

export const registerAsync = createAsyncAction(
    'EVT / Auth / register request',
    'EVT / Auth / lregister success',
    'EVT / Auth / register failure',
)<undefined, undefined, Error>()
