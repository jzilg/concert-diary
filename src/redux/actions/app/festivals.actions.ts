import { createAction, createAsyncAction } from 'typesafe-actions'
import type Festival from '../../../entities/Festival'

export const loadFestival = createAction('CMD / Festival / load')<Festival['id']>()
export const loadAllFestivals = createAction('CMD / Festival / load all')()
export const saveFestival = createAction('CMD / Festival / save')<Festival>()
export const saveNewFestival = createAction('CMD / Festival / save new')<Festival>()
export const deleteFestival = createAction('CMD / Festival / delete')<Festival['id']>()

export const loadAllFestivalsAsync = createAsyncAction(
    'EVT / Festival / load all request',
    'EVT / Festival / load all success',
    'EVT / Festival / load all failure',
)<undefined, Festival[], Error>()

export const loadFestivalAsync = createAsyncAction(
    'EVT / Festival / load request',
    'EVT / Festival / load success',
    'EVT / Festival / load failure',
)<Festival['id'], Festival, Error>()

export const postFestivalAsync = createAsyncAction(
    'EVT / Festival / post request',
    'EVT / Festival / post success',
    'EVT / Festival / post failure',
)<Festival, Festival, Error>()

export const putFestivalAsync = createAsyncAction(
    'EVT / Festival / put request',
    'EVT / Festival / put success',
    'EVT / Festival / put failure',
)<Festival, Festival, Error>()

export const deleteFestivalAsync = createAsyncAction(
    'EVT / Festival / delete request',
    'EVT / Festival / delete success',
    'EVT / Festival / delete failure',
)<undefined, Festival['id'], Error>()

export const setFestivalsState = createAction('DOC / Festival / set state')<Festival[]>()
export const addFestivalToState = createAction('DOC / Festival / add to state')<Festival>()
export const updateFestivalOnState = createAction('DOC / Festival / update on state')<Festival>()
export const removeFestivalFromState = createAction('DOC / Festival / remove from state')<Festival['id']>()
