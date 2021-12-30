import { ActionCreator } from 'typesafe-actions'

const overwritePayload = (fn: ActionCreator, param: unknown): ActionCreator => (
    (payload, meta) => fn(param, meta)
)

export default overwritePayload
