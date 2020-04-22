import { createAction, createAsyncAction } from 'typesafe-actions'
import Concert, { Concerts, ConcertId } from '../../../entities/Concert'

export const fetchConcertsAsync = createAsyncAction(
    'CMD / Concert / FETCH_ALL_REQUEST',
    'EVT / Concert / FETCH_ALL_SUCCESS',
    'EVT / Concert / FETCH_ALL_FAILURE',
)<undefined, Concerts, Error>()

export const fetchConcertAsync = createAsyncAction(
    'CMD / Concert / FETCH_REQUEST',
    'EVT / Concert / FETCH_SUCCESS',
    'EVT / Concert / FETCH_FAILURE',
)<ConcertId, Concert, Error>()

export const postConcertAsync = createAsyncAction(
    'CMD / Concert / POST_REQUEST',
    'EVT / Concert / POST_SUCCESS',
    'EVT / Concert / POST_FAILURE',
)<Concert, Concert, Error>()

export const putConcertAsync = createAsyncAction(
    'CMD / Concert / PUT_REQUEST',
    'EVT / Concert / PUT_SUCCESS',
    'EVT / Concert / PUT_FAILURE',
)<Concert, Concert, Error>()

export const deleteConcertAsync = createAsyncAction(
    'CMD / Concert / DELETE_REQUEST',
    'EVT / Concert / DELETE_SUCCESS',
    'EVT / Concert / DELETE_FAILURE',
)<ConcertId, ConcertId, Error>()

export const saveConcert = createAction('CMD / Concert / SAVE')<Concert>()
export const saveNewConcert = createAction('CMD / Concert / SAVE NEW')<Concert>()
export const setConcertsState = createAction('DOC / Concert / SET_STATE')<Concerts>()
export const setConcertOnState = createAction('DOC / Concert / ADD_TO_STATE')<Concert>()
export const removeConcertFromState = createAction('DOC / Concert / REMOVE_FROM_STATE')<ConcertId>()
