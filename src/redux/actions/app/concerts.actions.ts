import { createAction, createAsyncAction } from 'typesafe-actions'
import Concert from '../../../entities/Concert'

export const fetchConcertsAsync = createAsyncAction(
    'CMD / Concert / fetch-all request',
    'EVT / Concert / fetch-all success',
    'EVT / Concert / fetch-all failure',
)<undefined, Concert[], Error>()

export const fetchConcertAsync = createAsyncAction(
    'CMD / Concert / fetch request',
    'EVT / Concert / fetch success',
    'EVT / Concert / fetch failure',
)<Concert['id'], Concert, Error>()

export const postConcertAsync = createAsyncAction(
    'CMD / Concert / post request',
    'EVT / Concert / post success',
    'EVT / Concert / post failure',
)<Concert, Concert, Error>()

export const putConcertAsync = createAsyncAction(
    'CMD / Concert / put request',
    'EVT / Concert / put success',
    'EVT / Concert / put failure',
)<Concert, Concert, Error>()

export const deleteConcertAsync = createAsyncAction(
    'CMD / Concert / delete request',
    'EVT / Concert / delete success',
    'EVT / Concert / delete failure',
)<Concert['id'], Concert['id'], Error>()

export const saveConcert = createAction('CMD / Concert / save')<Concert>()
export const saveNewConcert = createAction('CMD / Concert / save new')<Concert>()
export const setConcertsState = createAction('DOC / Concert / set state')<Concert[]>()
export const addConcertToState = createAction('DOC / Concert / add to state')<Concert>()
export const updateConcertOnState = createAction('DOC / Concert / update on state')<Concert>()
export const removeConcertFromState = createAction('DOC / Concert / remove from state')<Concert['id']>()
