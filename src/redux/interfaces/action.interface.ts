import { ApiRequestOptions } from '../middleware/core/apiMiddleware'
import { UiOptions } from '../middleware/core/uiMiddleware'

export type Feature = string

export default interface Action<Payload = {}> {
    type: string
    payload?: Payload
    meta: {
        feature: Feature
        api?: ApiRequestOptions
        ui?: UiOptions
    }
}
