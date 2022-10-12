import type { Action } from 'typesafe-actions'
import { createAction } from 'typesafe-actions'

export const increaseLoaderCount = createAction('DOC / Loading Count / increase state')<undefined, { causedBy: Action }>()

export const decreaseLoaderCount = createAction('DOC / Loading Count / decrease state')<undefined, { causedBy: Action }>()
