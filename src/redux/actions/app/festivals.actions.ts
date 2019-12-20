import { createAction, createAsyncAction } from 'typesafe-actions'
import Festival, { Festivals, FestivalId } from '../../../entities/Festival'

export const saveFestival = createAction('[Festivals] [CMD] SAVE')<Festival>()

export const fetchFestivalsAsync = createAsyncAction(
    '[Festivals] [CMD] FETCH_REQUEST',
    '[Festivals] [EVENT] FETCH_SUCCESS',
    '[Festivals] [EVENT] FETCH_FAILURE',
)<FestivalId|undefined, Festivals, Error>()

export const setFestivalsState = createAction('[Festivals] [DOC] SET_STATE')<Festivals>()

export const postFestivalAsync = createAsyncAction(
    '[Festivals] [CMD] POST_REQUEST',
    '[Festivals] [EVENT] POST_SUCCESS',
    '[Festivals] [EVENT] POST_FAILURE',
)<Festival, Festival, Error>()

export const addFestivalToState = createAction('[Festivals] [DOC] ADD_TO_STATE')<Festival>()

export const putFestivalAsync = createAsyncAction(
    '[Festivals] [CMD] PUT_REQUEST',
    '[Festivals] [EVENT] PUT_SUCCESS',
    '[Festivals] [EVENT] PUT_FAILURE',
)<Festival, Festival, Error>()

export const updateFestivalOnState = createAction('[Festivals] [DOC] UPDATE_ON_STATE')<Festival>()

export const deleteFestivalAsync = createAsyncAction(
    '[Festivals] [CMD] DELETE_REQUEST',
    '[Festivals] [EVENT] DELETE_SUCCESS',
    '[Festivals] [EVENT] DELETE_FAILURE',
)<FestivalId, FestivalId, Error>()

export const removeFestivalFromState = createAction('[Festivals] [DOC] REMOVE_FROM_STATE')<FestivalId>()
