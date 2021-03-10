import { createAction, createAsyncAction } from 'typesafe-actions'
import Concert from '../../../entities/Concert'

export const loadConcert = createAction('CMD / Concert / load')<Concert['id']>()
export const loadAllConcerts = createAction('CMD / Concert / load all')()
export const saveConcert = createAction('CMD / Concert / save')<Concert>()
export const saveNewConcert = createAction('CMD / Concert / save new')<Concert>()
export const deleteConcert = createAction('CMD / Concert / delete')<Concert['id']>()

export const loadAllConcertsAsync = createAsyncAction(
    'EVT / Concert / load all request',
    'EVT / Concert / load all success',
    'EVT / Concert / load all failure',
)<undefined, Concert[], Error>()

export const loadConcertAsync = createAsyncAction(
    'EVT / Concert / load request',
    'EVT / Concert / load success',
    'EVT / Concert / load failure',
)<Concert['id'], Concert, Error>()

export const postConcertAsync = createAsyncAction(
    'EVT / Concert / post request',
    'EVT / Concert / post success',
    'EVT / Concert / post failure',
)<Concert, Concert, Error>()

export const putConcertAsync = createAsyncAction(
    'EVT / Concert / put request',
    'EVT / Concert / put success',
    'EVT / Concert / put failure',
)<Concert, Concert, Error>()

export const deleteConcertAsync = createAsyncAction(
    'EVT / Concert / delete request',
    'EVT / Concert / delete success',
    'EVT / Concert / delete failure',
)<undefined, Concert['id'], Error>()

export const setConcertsState = createAction('DOC / Concert / set state')<Concert[]>()
export const addConcertToState = createAction('DOC / Concert / add to state')<Concert>()
export const updateConcertOnState = createAction('DOC / Concert / update on state')<Concert>()
export const removeConcertFromState = createAction('DOC / Concert / remove from state')<Concert['id']>()
