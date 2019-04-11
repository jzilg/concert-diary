export type Concerts = Concert[]

export default interface Concert {
    id: number
    date: string
    act: string[]
    supportAct: string[]
    location: string
    companions: string[]
}
