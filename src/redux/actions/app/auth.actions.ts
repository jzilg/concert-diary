import { createAction, createAsyncAction } from 'typesafe-actions'

export const authAsync = createAsyncAction(
    '[Auth] [CMD] REQUEST',
    '[Auth] [EVENT] SUCCESS',
    '[Auth] [EVENT] FAILURE',
)<{ username: string; password: string }, string, Error>()

export const setWebtokenOnState = createAction('[AUTH] [DOC] SET_TOKEN_ON_STATE')<string>()
