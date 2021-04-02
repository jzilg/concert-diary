import { State } from '../src/redux/reducers/rootReducer'

declare module 'react-redux' {
    interface DefaultRootState extends State {}
}
