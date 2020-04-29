import { createAction, createAsyncAction } from 'typesafe-actions'
import Festival, { Festivals, FestivalId } from '../../../entities/Festival'

export const saveFestival = createAction('CMD / Festival / SAVE')<Festival>()

export const fetchFestivalsAsync = createAsyncAction(
    'CMD / Festival / FETCH_REQUEST',
    'EVT / Festival / FETCH_SUCCESS',
    'EVT / Festival / FETCH_FAILURE',
)<FestivalId|undefined, Festivals, Error>()

export const setFestivalsState = createAction('DOC / Festival / SET_STATE')<Festivals>()

export const postFestivalAsync = createAsyncAction(
    'CMD / Festival / POST_REQUEST',
    'EVT / Festival / POST_SUCCESS',
    'EVT / Festival / POST_FAILURE',
)<Festival, Festival, Error>()

export const addFestivalToState = createAction('DOC / Festival / ADD_TO_STATE')<Festival>()

export const putFestivalAsync = createAsyncAction(
    'CMD / Festival / PUT_REQUEST',
    'EVT / Festival / PUT_SUCCESS',
    'EVT / Festival / PUT_FAILURE',
)<Festival, Festival, Error>()

export const updateFestivalOnState = createAction('DOC / Festival / UPDATE_ON_STATE')<Festival>()

export const deleteFestivalAsync = createAsyncAction(
    'CMD / Festival / DELETE_REQUEST',
    'EVT / Festival / DELETE_SUCCESS',
    'EVT / Festival / DELETE_FAILURE',
)<FestivalId, FestivalId, Error>()

export const removeFestivalFromState = createAction('DOC / Festival / REMOVE_FROM_STATE')<FestivalId>()
