import { createAction, createAsyncAction } from 'typesafe-actions'
import Festival, { Festivals, FestivalId } from '../../../entities/Festival'

export const saveFestival = createAction('Festival | CMD | SAVE')<Festival>()

export const fetchFestivalsAsync = createAsyncAction(
    'Festival | CMD | FETCH_REQUEST',
    'Festival | EVENT | FETCH_SUCCESS',
    'Festival | EVENT | FETCH_FAILURE',
)<FestivalId|undefined, Festivals, Error>()

export const setFestivalsState = createAction('Festival | DOC | SET_STATE')<Festivals>()

export const postFestivalAsync = createAsyncAction(
    'Festival | CMD | POST_REQUEST',
    'Festival | EVENT | POST_SUCCESS',
    'Festival | EVENT | POST_FAILURE',
)<Festival, Festival, Error>()

export const addFestivalToState = createAction('Festival | DOC | ADD_TO_STATE')<Festival>()

export const putFestivalAsync = createAsyncAction(
    'Festival | CMD | PUT_REQUEST',
    'Festival | EVENT | PUT_SUCCESS',
    'Festival | EVENT | PUT_FAILURE',
)<Festival, Festival, Error>()

export const updateFestivalOnState = createAction('Festival | DOC | UPDATE_ON_STATE')<Festival>()

export const deleteFestivalAsync = createAsyncAction(
    'Festival | CMD | DELETE_REQUEST',
    'Festival | EVENT | DELETE_SUCCESS',
    'Festival | EVENT | DELETE_FAILURE',
)<FestivalId, FestivalId, Error>()

export const removeFestivalFromState = createAction('Festival | DOC | REMOVE_FROM_STATE')<FestivalId>()
