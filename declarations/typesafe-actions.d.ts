import { ActionType, StateType } from 'typesafe-actions'

declare module 'typesafe-actions' {
    export type Store = StateType<typeof import('../src/redux/store').default>;

    export type RootState = StateType<typeof import('../src/redux/reducers/rootReducer').default>;

    export type RootAction = ActionType<typeof import('../src/redux/actions').default>;

    interface Types {
        RootAction: RootAction;
    }
}
