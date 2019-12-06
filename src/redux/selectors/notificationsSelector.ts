import State from '../State'
import Notification from '../../entities/Notification'

function notificationsSelector(state: State): Notification[] {
    return state.notifications
}

export default notificationsSelector
