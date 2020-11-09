export type Concerts = Concert[]
export type ConcertId = Concert['id']

type Concert = {
    id: number
    date: string
    band: string
    supportBands: string[]
    location: string
    companions: string[]
}

export default Concert
