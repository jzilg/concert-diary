export type Concerts = Concert[]
export type ConcertId = number

type Concert = {
    id: ConcertId
    date: string
    band: string
    supportBands: string[]
    location: string
    companions: string[]
}

/* eslint-disable-next-line no-undef */
export default Concert
