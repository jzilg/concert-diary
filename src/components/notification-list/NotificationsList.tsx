import type { FC } from 'preact/compat'
import React from 'preact/compat'
import type Notification from '../../entities/Notification'
import style from './notificationsList.module.scss'

export type Props = {
    notifications: Notification[]
    removeNotification: Function
}

const NotificationsList: FC<Props> = (props) => {
    const { notifications, removeNotification } = props

    if (notifications.length === 0) {
        return null
    }

    const notificationMessageElements = notifications.map((notification) => {
        const { id, type, message } = notification

        const clickHandler = (): void => {
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
