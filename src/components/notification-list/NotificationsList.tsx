import React, { FunctionComponent } from 'preact/compat'
import Notification from '../../entities/Notification'
import style from './notificationsList.scss'

export type Props = {
    notifications: Notification[]
    removeNotification: Function
}

const NotificationsList: FunctionComponent<Props> = (props) => {
    const { notifications, removeNotification } = props

    if (notifications.length === 0) {
        return null
    }

    const notificationMessageElements = notifications.map((notification) => {
        const { id, type, message } = notification

        function clickHandler(): void {
            removeNotification(id, '[USER EVENT]')
        }

        return (
            <li key={id} className={`${style.listItem} ${style[type]}`}>
                <div className={style.container}>
                    <button onClick={clickHandler} className={style.button} type="button">
                        ✕
                    </button>
                    <span>
                        {message}
                    </span>
                </div>
            </li>
        )
    })

    return (
        <ul className={style.list}>
            {notificationMessageElements}
        </ul>
    )
}

export default NotificationsList
