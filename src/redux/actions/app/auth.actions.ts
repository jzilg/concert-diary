import { createAction, createAsyncAction } from 'typesafe-actions'

export const authAsync = createAsyncAction(
    'CMD / Auth / request',
    'EVT / Auth / success',
    'EVT / Auth / failure',
)<{ username: string; password: string }, string, Error>()

export const setApiTokenOnState = createAction('DOC / Auth / set api token')<string>()
