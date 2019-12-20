import { createAction, createAsyncAction } from 'typesafe-actions'
import Concert, { Concerts, ConcertId } from '../../../entities/Concert'

export const saveConcert = createAction('[Concerts] [CMD] SAVE')<Concert>()

export const fetchConcertsAsync = createAsyncAction(
    '[Concerts] [CMD] FETCH_REQUEST',
    '[Concerts] [EVENT] FETCH_SUCCESS',
    '[Concerts] [EVENT] FETCH_FAILURE',
)<ConcertId|undefined, Concerts, Error>()

export const setConcertsState = createAction('[Concerts] [DOC] SET_STATE')<Concerts>()

export const postConcertAsync = createAsyncAction(
    '[Concerts] [CMD] POST_REQUEST',
    '[Concerts] [EVENT] POST_SUCCESS',
    '[Concerts] [EVENT] POST_FAILURE',
)<Concert, Concert, Error>()

export const addConcertToState = createAction('[Concerts] [DOC] ADD_TO_STATE')<Concert>()

export const putConcertAsync = createAsyncAction(
    '[Concerts] [CMD] PUT_REQUEST',
    '[Concerts] [EVENT] PUT_SUCCESS',
    '[Concerts] [EVENT] PUT_FAILURE',
)<Concert, Concert, Error>()

export const updateConcertOnState = createAction('[Concerts] [DOC] UPDATE_ON_STATE')<Concert>()

export const deleteConcertAsync = createAsyncAction(
    '[Concerts] [CMD] DELETE_REQUEST',
    '[Concerts] [EVENT] DELETE_SUCCESS',
    '[Concerts] [EVENT] DELETE_FAILURE',
)<ConcertId, ConcertId, Error>()

export const removeConcertFromState = createAction('[Concerts] [DOC] REMOVE_FROM_STATE')<ConcertId>()
