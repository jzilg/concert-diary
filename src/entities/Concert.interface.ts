export type Concerts = Concert[]
export type ConcertId = number

export default interface Concert {
    id: ConcertId
    date: string
    act: string[]
    supportAct: string[]
    location: string
    companions: string[]
}
