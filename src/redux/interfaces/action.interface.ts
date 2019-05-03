import { ApiRequestOptions } from '../middleware/core/apiMiddleware'
import { UiOptions } from '../middleware/core/uiMiddleware'

export type Feature = string

export default interface Action {
    type: string
    feature: Feature
    payload?: object
    meta?: {
        api?: ApiRequestOptions
        ui?: UiOptions
        triggeredBy?: string
    }
}
