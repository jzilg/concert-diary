import { createAction } from 'typesafe-actions'

export const pageRendered = createAction('CMD / Page / page rendered')()

export const setPageIsRenderedState = createAction('DOC / Page / set state')<boolean>()
