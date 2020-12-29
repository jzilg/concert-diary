export type Festivals = Festival[]
export type FestivalId = string

type Festival = {
    id: FestivalId
    date: {
        from: string
        until: string
    }
    name: string
    bands: string[]
    companions: string[]
}

export default Festival
