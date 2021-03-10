import { ActionCreator } from 'typesafe-actions'

function overwritePayload(fn: ActionCreator, param: unknown): ActionCreator {
    return (payload, meta) => fn(param, meta)
}

export default overwritePayload
