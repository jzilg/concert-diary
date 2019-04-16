import { ApiRequestOptions } from '../middleware/core/apiMiddleware'

export default interface Action {
    type: string
    payload?: object
    meta?: {
        api?: ApiRequestOptions
        triggeredBy?: string
    }
}
