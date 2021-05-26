import { createMockStore } from 'redux-test-utils'
import { push } from 'connected-react-router'
import {
    authAsync,
    login,
    logout,
    register,
    registerAsync,
    resetApiTokenState,
    setApiTokenOnState,
} from '../../../actions/app/auth.actions'
import authMiddleware from '../authMiddleware'
import { createNotification } from '../../../actions/core/notifications.actions'

describe('authMiddleware', () => {
    const next = jest.fn()
    const apiHandler = jest.fn()
    const api = {
        getLoginOptions: jest.fn(),
        getRegisterOptions: jest.fn(),
    }

    it('should call next but no action on default', () => {
        const store = createMockStore({})
        const action = {
            type: 'SOME_ACTION',
        }

        authMiddleware(undefined, undefined)(store)(next)(action)

        const executedActions = store.getActions()

        expect(next).toHaveBeenCalled()
        expect(executedActions.length).toBe(0)
    })

    describe('login', () => {
        it('should call apiHandler', () => {
            const store = createMockStore({})
            const action = login({
                username: 'name',
                password: '13245',
            })

            authMiddleware(api, apiHandler)(store)(next)(action)

            expect(api.getLoginOptions).toHaveBeenCalled()
            expect(apiHandler).toHaveBeenCalled()
        })
    })

    describe('authAsync.success', () => {
        it('should dispatch setApiTokenOnState and push to "/"', () => {
            const store = createMockStore({})
            const apiToken = '12345'
            const action = authAsync.success(apiToken)
            const expectedActions = [
                setApiTokenOnState(apiToken),
                push('/'),
            ]

            authMiddleware(undefined, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('authAsync.failure', () => {
        it('should dispatch createNotification', () => {
            const store = createMockStore({})
            const action = authAsync.failure()
            const expectedActions = [
                createNotification({
                    type: 'error',
                    message: 'Wrong Username or Password',
                }, {
                    causedBy: authAsync.failure(),
                }),
            ]

            authMiddleware(undefined, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('logout', () => {
        it('should dispatch resetApiTokenState, push to "/login" and createNotification', () => {
            const store = createMockStore({})
            const action = logout()
            const expectedActions = [
                resetApiTokenState(),
                push('/login'),
                createNotification({
                    type: 'success',
                    message: 'Successfully logged out',
                }, {
                    causedBy: action,
                }),
            ]

            authMiddleware(undefined, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })

    describe('register', () => {
        it('should call apiHandler', () => {
            const store = createMockStore({})
            const action = register({
                username: 'name',
                password: '13245',
                token: '123345',
            })

            authMiddleware(api, apiHandler)(store)(next)(action)

            expect(api.getRegisterOptions).toHaveBeenCalled()
            expect(apiHandler).toHaveBeenCalled()
        })
    })

    describe('registerAsync.success', () => {
        it('should dispatch push to /login and createNotification', () => {
            const store = createMockStore({})
            const action = registerAsync.success()

            const expectedActions = [
                push('/login'),
                createNotification({
                    type: 'success',
                    message: 'Registration success. Please login now.',
                }, {
                    causedBy: action,
                }),
            ]

            authMiddleware(undefined, undefined)(store)(next)(action)

            const executedActions = store.getActions()

            expect(executedActions).toEqual(expectedActions)
        })
    })
})
