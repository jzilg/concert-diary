import { State } from '../reducers/rootReducer'
import Notification from '../../entities/Notification'

const notificationsSelector = (state: State): Notification[] => state.notifications

export default notificationsSelector
