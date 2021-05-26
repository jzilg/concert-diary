import { createMockStore } from 'redux-test-utils'
import { push } from 'connected-react-router'
import concertsMiddleware from '../concertsMiddleware'
import {
    saveNewConcert,
    postConcertAsync,
    addConcertToState,
    loadAllConcerts,
    loadAllConcertsAsync,
    loadConcert,
    loadConcertAsync,
    setConcertsState,
    saveConcert,
    putConcertAsync,
    updateConcertOnState,
    deleteConcert,
    deleteConcertAsync,
    removeConcertFromState,
} from '../../../actions/app/concerts.actions'
import * as concertsSelector from '../../../selectors/concertsSelector'
import * as apiTokenSelector from '../../../selectors/apiTokenSelector'

describe('concertsMiddleware', () => {
    const next = jest.fn()
    const apiHandler = jest.fn()
    const api = {
        getSaveNewConcertOptions: jest.fn(),
        getLoadAllConcertsOptions: jest.fn(),
        getLoadConcertOptions: jest.fn(),
        getSaveConcertOptions: jest.fn(),
        getDeleteConcertOptions: jest.fn(),
    }
    const concert = {
        id: '0',
    }

    jest.spyOn(apiTokenSelector, 'default').mockReturnValue('token')

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should call next but no action on default', () => {
        const store = createMockStore({})
        const action = {
            type: 'SOME_ACTION',
        }

        concertsMiddleware(undefined, undefined, undefined)(store)(next)(action)

        const executedActions = store.getActions()

        expect(next).toHaveBeenCalledWith(action)
        expect(executedActions.length).toBe(0)
    })

    describe('saveNewConcert', () => {
        it('should call apiHandler', () => {
            const store = createMockStore({})
            const action = saveNewConcert(concert)

            concertsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            expect(apiHandler).toHaveBeenCalled()
        })
    })

    describe('loadAllConcerts', () => {
        it('should call apiHandler', () => {
            const store = createMockStore({})
            const action = loadAllConcerts()

            concertsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            expect(apiHandler).toHaveBeenCalled()
        })
    })

    describe('loadConcert', () => {
        it('should call apiHandler', () => {
            const store = createMockStore({})
            const action = loadConcert(concert.id)

            concertsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            expect(apiHandler).toHaveBeenCalled()
        })
    })

    describe('saveConcert', () => {
        it('should call apiHandler', () => {
            const store = createMockStore({})
            const action = saveConcert(concert)

            concertsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            expect(apiHandler).toHaveBeenCalled()
        })
    })

    describe('deleteConcert', () => {
        it('should call apiHandler if confirm returns true', () => {
            const store = createMockStore({})
            const confirm = jest.fn().mockReturnValue(true)
            const action = deleteConcert(concert.id)

            concertsMiddleware(api, apiHandler, confirm)(store)(next)(action)

            expect(confirm).toHaveBeenCalled()
            expect(apiHandler).toHaveBeenCalled()
        })

        it('should not call apiHandler if confirm returns false', () => {
            const store = createMockStore({})
            const confirm = jest.fn().mockReturnValue(false)
            const action = deleteConcert(concert.id)

            concertsMiddleware(api, apiHandler, confirm)(store)(next)(action)

            expect(confirm).toHaveBeenCalled()
            expect(apiHandler).toBeCalledTimes(0)
        })
    })

    describe('postConcertAsync.success', () => {
        it('should dispatch addConcertToState and push to "/concerts"', () => {
            const store = createMockStore({})
            const action = postConcertAsync.success(concert)
            const expectedActions = [
                addConcertToState(concert),
                push('/concerts'),
            ]

            concertsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('loadAllConcertsAsync.success', () => {
        it('should dispatch setConcertsState', () => {
            const concerts = [
                concert,
            ]
            const store = createMockStore({})
            const action = loadAllConcertsAsync.success(concerts)
            const expectedActions = [
                setConcertsState(concerts),
            ]

            concertsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('loadConcertAsync.success', () => {
        it('should dispatch updateConcertOnState if concert already exists', () => {
            jest.spyOn(concertsSelector, 'default').mockReturnValue([
                concert,
            ])

            const store = createMockStore({})
            const action = loadConcertAsync.success(concert)
            const expectedActions = [
                updateConcertOnState(concert),
            ]

            concertsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })

        it('should dispatch addConcertToState if concert already exists', () => {
            jest.spyOn(concertsSelector, 'default').mockReturnValue([])

            const store = createMockStore({})
            const action = loadConcertAsync.success(concert)
            const expectedActions = [
                addConcertToState(concert),
            ]

            concertsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('putConcertAsync.success', () => {
        it('should dispatch updateConcertOnState and push to "/concerts"', () => {
            const store = createMockStore({})
            const action = putConcertAsync.success(concert)
            const expectedActions = [
                updateConcertOnState(concert),
                push('/concerts'),
            ]

            concertsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('deleteConcertAsync.success', () => {
        it('should dispatch removeConcertFromState', () => {
            const store = createMockStore({})
            const action = deleteConcertAsync.success(concert.id)
            const expectedActions = [
                removeConcertFromState(concert.id),
            ]

            concertsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })
})
