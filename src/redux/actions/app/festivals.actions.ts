import { createAction, createAsyncAction } from 'typesafe-actions'
import Festival, { Festivals, FestivalId } from '../../../entities/Festival'

export const fetchFestivalsAsync = createAsyncAction(
    'CMD / Festival / fetch-all request',
    'EVT / Festival / fetch-all success',
    'EVT / Festival / fetch-all failure',
)<undefined, Festivals, Error>()

export const fetchFestivalAsync = createAsyncAction(
    'CMD / Festival / fetch request',
    'EVT / Festival / fetch success',
    'EVT / Festival / fetch failure',
)<FestivalId, Festival, Error>()

export const postFestivalAsync = createAsyncAction(
    'CMD / Festival / post request',
    'EVT / Festival / post success',
    'EVT / Festival / post failure',
)<Festival, Festival, Error>()

export const putFestivalAsync = createAsyncAction(
    'CMD / Festival / put request',
    'EVT / Festival / put success',
    'EVT / Festival / put failure',
)<Festival, Festival, Error>()

export const deleteFestivalAsync = createAsyncAction(
    'CMD / Festival / delete request',
    'EVT / Festival / delete success',
    'EVT / Festival / delete failure',
)<FestivalId, FestivalId, Error>()

export const saveFestival = createAction('CMD / Festival / save')<Festival>()
export const saveNewFestival = createAction('CMD / Festival / save new')<Festival>()
export const setFestivalsState = createAction('DOC / Festival / set state')<Festivals>()
export const setFestivalOnState = createAction('DOC / Festival / add to state')<Festival>()
export const removeFestivalFromState = createAction('DOC / Festival / remove from state')<FestivalId>()
