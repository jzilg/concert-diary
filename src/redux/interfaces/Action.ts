export type Feature = string

export default interface Action<Payload = {}> {
    type: string
    payload?: Payload
    meta?: {
        feature?: Feature
    }
}
