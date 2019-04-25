export type Concerts = Concert[]
export type ConcertId = number

export default interface Concert {
    id: ConcertId
    date: string
    band: string
    supportBands: string[]
    location: string
    companions: string[]
}
