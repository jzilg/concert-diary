import { createMockStore } from 'redux-test-utils'
import { push } from 'connected-react-router'
import festivalsMiddleware from '../festivalsMiddleware'
import {
    saveNewFestival,
    postFestivalAsync,
    addFestivalToState,
    loadAllFestivals,
    loadAllFestivalsAsync,
    loadFestival,
    loadFestivalAsync,
    setFestivalsState,
    saveFestival,
    putFestivalAsync,
    updateFestivalOnState,
    deleteFestival,
    deleteFestivalAsync,
    removeFestivalFromState,
} from '../../../actions/app/festivals.actions'
import * as festivalsSelector from '../../../selectors/festivalsSelector'
import * as apiTokenSelector from '../../../selectors/apiTokenSelector'

describe('festivalsMiddleware', () => {
    const next = jest.fn()
    const apiHandler = jest.fn()
    const api = {
        getSaveNewFestivalOptions: jest.fn(),
        getLoadAllFestivalsOptions: jest.fn(),
        getLoadFestivalOptions: jest.fn(),
        getSaveFestivalOptions: jest.fn(),
        getDeleteFestivalOptions: jest.fn(),
    }
    const festival = {
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

        festivalsMiddleware(undefined, undefined, undefined)(store)(next)(action)

        const executedActions = store.getActions()

        expect(next).toHaveBeenCalledWith(action)
        expect(executedActions.length).toBe(0)
    })

    describe('saveNewFestival', () => {
        it('should call apiHandler', () => {
            const store = createMockStore({})
            const action = saveNewFestival(festival)

            festivalsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            expect(apiHandler).toHaveBeenCalled()
        })
    })

    describe('loadAllFestivals', () => {
        it('should call apiHandler', () => {
            const store = createMockStore({})
            const action = loadAllFestivals()

            festivalsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            expect(apiHandler).toHaveBeenCalled()
        })
    })

    describe('loadFestival', () => {
        it('should call apiHandler', () => {
            const store = createMockStore({})
            const action = loadFestival(festival.id)

            festivalsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            expect(apiHandler).toHaveBeenCalled()
        })
    })

    describe('saveFestival', () => {
        it('should call apiHandler', () => {
            const store = createMockStore({})
            const action = saveFestival(festival)

            festivalsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            expect(apiHandler).toHaveBeenCalled()
        })
    })

    describe('deleteFestival', () => {
        it('should call apiHandler if confirm returns true', () => {
            const store = createMockStore({})
            const confirm = jest.fn().mockReturnValue(true)
            const action = deleteFestival(festival.id)

            festivalsMiddleware(api, apiHandler, confirm)(store)(next)(action)

            expect(confirm).toHaveBeenCalled()
            expect(apiHandler).toHaveBeenCalled()
        })

        it('should not call apiHandler if confirm returns false', () => {
            const store = createMockStore({})
            const confirm = jest.fn().mockReturnValue(false)
            const action = deleteFestival(festival.id)

            festivalsMiddleware(api, apiHandler, confirm)(store)(next)(action)

            expect(confirm).toHaveBeenCalled()
            expect(apiHandler).toBeCalledTimes(0)
        })
    })

    describe('postFestivalAsync.success', () => {
        it('should dispatch addFestivalToState and push to "/festivals"', () => {
            const store = createMockStore({})
            const action = postFestivalAsync.success(festival)
            const expectedActions = [
                addFestivalToState(festival),
                push('/festivals'),
            ]

            festivalsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('loadAllFestivalsAsync.success', () => {
        it('should dispatch setFestivalsState', () => {
            const festivals = [
                festival,
            ]
            const store = createMockStore({})
            const action = loadAllFestivalsAsync.success(festivals)
            const expectedActions = [
                setFestivalsState(festivals),
            ]

            festivalsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('loadFestivalAsync.success', () => {
        it('should dispatch updateFestivalOnState if festival already exists', () => {
            jest.spyOn(festivalsSelector, 'default').mockReturnValue([
                festival,
            ])

            const store = createMockStore({})
            const action = loadFestivalAsync.success(festival)
            const expectedActions = [
                updateFestivalOnState(festival),
            ]

            festivalsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })

        it('should dispatch addFestivalToState if festival already exists', () => {
            jest.spyOn(festivalsSelector, 'default').mockReturnValue([])

            const store = createMockStore({})
            const action = loadFestivalAsync.success(festival)
            const expectedActions = [
                addFestivalToState(festival),
            ]

            festivalsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('putFestivalAsync.success', () => {
        it('should dispatch updateFestivalOnState and push to "/festivals"', () => {
            const store = createMockStore({})
            const action = putFestivalAsync.success(festival)
            const expectedActions = [
                updateFestivalOnState(festival),
                push('/festivals'),
            ]

            festivalsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('deleteFestivalAsync.success', () => {
        it('should dispatch removeFestivalFromState', () => {
            const store = createMockStore({})
            const action = deleteFestivalAsync.success(festival.id)
            const expectedActions = [
                removeFestivalFromState(festival.id),
            ]

            festivalsMiddleware(api, apiHandler, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })
})
