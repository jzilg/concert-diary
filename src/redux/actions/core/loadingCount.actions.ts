import { createAction } from 'typesafe-actions'

export const increaseLoaderCount = createAction('DOC / Loading Count / INCREASE_ON_STATE')<undefined, { causedBy: string }>()

export const decreaseLoaderCount = createAction('DOC / Loading Count / DECREASE_ON_STATE')<undefined, { causedBy: string }>()
