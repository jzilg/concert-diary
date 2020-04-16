import { createAction, createAsyncAction } from 'typesafe-actions'
import Concert, { Concerts, ConcertId } from '../../../entities/Concert'

export const fetchConcertsAsync = createAsyncAction(
    'Concert | CMD | FETCH_ALL_REQUEST',
    'Concert | EVENT | FETCH_ALL_SUCCESS',
    'Concert | EVENT | FETCH_ALL_FAILURE',
)<undefined, Concerts, Error>()

export const fetchConcertAsync = createAsyncAction(
    'Concert | CMD | FETCH_REQUEST',
    'Concert | EVENT | FETCH_SUCCESS',
    'Concert | EVENT | FETCH_FAILURE',
)<ConcertId, Concert, Error>()

export const postConcertAsync = createAsyncAction(
    'Concert | CMD | POST_REQUEST',
    'Concert | EVENT | POST_SUCCESS',
    'Concert | EVENT | POST_FAILURE',
)<Concert, Concert, Error>()

export const putConcertAsync = createAsyncAction(
    'Concert | CMD | PUT_REQUEST',
    'Concert | EVENT | PUT_SUCCESS',
    'Concert | EVENT | PUT_FAILURE',
)<Concert, Concert, Error>()

export const deleteConcertAsync = createAsyncAction(
    'Concert | CMD | DELETE_REQUEST',
    'Concert | EVENT | DELETE_SUCCESS',
    'Concert | EVENT | DELETE_FAILURE',
)<ConcertId, ConcertId, Error>()

export const saveConcert = createAction('Concert | CMD | SAVE')<Concert>()
export const setConcertsState = createAction('Concert | DOC | SET_STATE')<Concerts>()
export const setConcertOnState = createAction('Concert | DOC | ADD_TO_STATE')<Concert>()
export const removeConcertFromState = createAction('Concert | DOC | REMOVE_FROM_STATE')<ConcertId>()
