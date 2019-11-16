export type Festivals = Festival[]
export type FestivalId = number

export default interface Festival {
    id: FestivalId
    date: {
        from: string
        until: string
    }
    name: string
    bands: string[]
    companions: string[]
}
