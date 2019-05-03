import { ApiRequestOptions } from '../middleware/core/apiMiddleware'
import { UiOptions } from '../middleware/core/uiMiddleware'

export default interface Action {
    type: string
    feature: string
    payload?: object
    meta?: {
        api?: ApiRequestOptions
        ui?: UiOptions
        triggeredBy?: string
    }
}
