import { createAsyncAction } from 'typesafe-actions'

export const authAsync = createAsyncAction(
    'CMD / Auth / REQUEST',
    'EVT / Auth / SUCCESS',
    'EVT / Auth / FAILURE',
)<{ username: string; password: string }, string, Error>()

export default authAsync
