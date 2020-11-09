import State from '../src/redux/State'

declare module 'react-redux' {
    interface DefaultRootState extends State {}
}
