import { createAction } from 'typesafe-actions'

export const increaseLoaderCount = createAction('[Loading Count] [DOC] INCREASE_ON_STATE')<undefined, string>()

export const decreaseLoaderCount = createAction('[Loading Count] [DOC] DECREASE_ON_STATE')<undefined, string>()
