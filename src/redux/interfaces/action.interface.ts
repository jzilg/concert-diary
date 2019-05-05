import { ApiRequestOptions } from '../middleware/core/apiMiddleware'
import { UiOptions } from '../middleware/core/uiMiddleware'

export type Feature = string

export default interface Action<Payload = {}> {
    type: string
    feature: Feature
    payload?: Payload
    meta?: {
        api?: ApiRequestOptions
        ui?: UiOptions
        triggeredBy?: string
    }
}
