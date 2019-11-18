export type Feature = string

type Action<Payload = {}> = {
    type: string
    payload?: Payload
    meta?: {
        feature?: Feature
    }
}

/* eslint-disable-next-line no-undef */
export default Action
