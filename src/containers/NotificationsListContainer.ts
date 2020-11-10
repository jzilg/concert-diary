import { connect, MapStateToProps } from 'react-redux'
import notificationsSelector from '../redux/selectors/notificationsSelector'
import { deleteNotification } from '../redux/actions/core/notifications.actions'
import NotificationsList, { Props } from '../components/notification-list'

const mapStateToProps: MapStateToProps<Partial<Props>, {}> = (state) => ({
    notifications: notificationsSelector(state),
})

const mapDispatchToProps: Partial<Props> = {
    removeNotification: deleteNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsList)
