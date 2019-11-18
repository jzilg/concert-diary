export type NotificationId = string
export type NotificationType = 'success' | 'warning' | 'error'
export type NotificationMessage = string
export type NotificationDuration = number

export type Notifications = Notification[]

export type NotificationOptions = {
    type: NotificationType
    message: NotificationMessage
    duration?: NotificationDuration
}

type Notification = {
    id: NotificationId
    type: NotificationType
    message: NotificationMessage
    duration?: NotificationDuration
}

/* eslint-disable-next-line no-undef */
export default Notification
