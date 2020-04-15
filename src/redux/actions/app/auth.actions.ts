import { createAsyncAction } from 'typesafe-actions'

export const authAsync = createAsyncAction(
    '[Auth] [CMD] REQUEST',
    '[Auth] [EVENT] SUCCESS',
    '[Auth] [EVENT] FAILURE',
)<{ username: string; password: string }, string, Error>()

export default authAsync
