import { createAction, createAsyncAction } from 'typesafe-actions'
import Festival, { Festivals, FestivalId } from '../../../entities/Festival'

export const saveFestival = createAction('CMD / Festival / SAVE')<Festival>()

export const fetchFestivalsAsync = createAsyncAction(
    'CMD / Festival / fetch request',
    'EVT / Festival / fetch success',
    'EVT / Festival / fetch failure',
)<FestivalId|undefined, Festivals, Error>()

export const setFestivalsState = createAction('DOC / Festival / SET_STATE')<Festivals>()

export const postFestivalAsync = createAsyncAction(
    'CMD / Festival / post request',
    'EVT / Festival / post success',
    'EVT / Festival / post failure',
)<Festival, Festival, Error>()

export const addFestivalToState = createAction('DOC / Festival / ADD_TO_STATE')<Festival>()

export const putFestivalAsync = createAsyncAction(
    'CMD / Festival / put request',
    'EVT / Festival / put success',
    'EVT / Festival / put failure',
)<Festival, Festival, Error>()

export const updateFestivalOnState = createAction('DOC / Festival / UPDATE_ON_STATE')<Festival>()

export const deleteFestivalAsync = createAsyncAction(
    'CMD / Festival / delete request',
    'EVT / Festival / delete success',
    'EVT / Festival / delete failure',
)<FestivalId, FestivalId, Error>()

export const removeFestivalFromState = createAction('DOC / Festival / REMOVE_FROM_STATE')<FestivalId>()
