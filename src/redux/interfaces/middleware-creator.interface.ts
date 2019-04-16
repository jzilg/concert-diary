import { AnyAction, Dispatch } from 'redux'

export default interface MiddlewareCreator<S = any, D extends Dispatch = Dispatch> {
    (next: Dispatch<AnyAction>): (action: any) => any
}
