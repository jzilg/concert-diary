import type { State } from '../reducers/rootReducer'
import type Notification from '../../entities/Notification'

const notificationsSelector = (state: State): Notification[] => state.notifications

export default notificationsSelector
