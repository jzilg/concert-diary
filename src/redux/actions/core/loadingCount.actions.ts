import { createAction } from 'typesafe-actions'

export const increaseLoaderCount = createAction('DOC / Loading Count / increase state')<undefined, { causedBy: string }>()

export const decreaseLoaderCount = createAction('DOC / Loading Count / decrease state')<undefined, { causedBy: string }>()
