import React, { ReactElement } from 'react'
import Notification from '../entities/Notification.interface'
import style from './notifications.css'

interface Props {
    notifications: Notification[]
    removeNotification: Function
}

function NotificationsList(props: Props): ReactElement {
    const { notifications, removeNotification } = props

    const notificationMessageElements = notifications.map((notification) => {
        const { id, type, message } = notification

        function clickHandler(): void {
            removeNotification(id, '[USER EVENT]')
        }

        return (
            <li key={id} className={style[type]}>
                <div className={style.container}>
                    <span>
                        {message}
                    </span>
                    <button onClick={clickHandler} className={`${style.button} no-button-style`} type="button">
                        ✕
                    </button>
                </div>
            </li>
        )
    })

    return (
        <ul className={`${style.list} no-list-style fade-in`}>
            {notificationMessageElements}
        </ul>
    )
}

export default NotificationsList
