export type NotificationId = string
export type NotificationType = 'success' | 'warning' | 'error'
export type NotificationMessage = string
export type NotificationDuration = number

export type Notifications = Notification[]

export default interface Notification {
    id: NotificationId
    type: NotificationType
    message: NotificationMessage
    duration?: NotificationDuration
}
