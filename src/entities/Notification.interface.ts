export type NotificationId = number
export type NotificationType = 'success' | 'warning' | 'error'
export type NotificationMessage = string
export type NotificationDuration = number

export default interface Notification {
    id: NotificationId
    type: NotificationType
    message: NotificationMessage
    duration?: NotificationDuration
}
