import React, { Fragment, useState, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Concert from '../entities/Concert.interface'
import ListInput from './ListInput'

interface Props {
    concert: Concert
    addConcert: Function
    goToHome: Function
}

function ConcertForm({ concert, addConcert, goToHome }: Props): ReactElement {
    const [act, setAct] = useState(concert.act)
    const [supportAct, setSupportAct] = useState(concert.supportAct)
    const [location, setLocation] = useState(concert.location)
    const [date, setDate] = useState(concert.date)
    const [companions, setCompanions] = useState(concert.companions)

    function handleSubmit(event): void {
        event.preventDefault()
        addConcert({
            id: concert.id,
            act,
            supportAct,
            location,
            date,
            companions,
        })
        goToHome()
    }

    return (
        <Fragment>
            <Link to="/">Back to List</Link>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Band</span>
                    <ListInput list={act} onChange={list => setAct(list)} />
                </label>
                <label>
                    <span>Support</span>
                    <ListInput list={supportAct} onChange={list => setSupportAct(list)} />
                </label>
                <label>
                    <span>Location</span>
                    <input type="text" value={location} onChange={event => setLocation(event.target.value)} />
                </label>
                <label>
                    <span>Date</span>
                    <input type="date" value={date} onChange={event => setDate(event.target.value)} />
                </label>
                <label>
                    <span>Companions</span>
                    <ListInput list={companions} onChange={list => setCompanions(list)} />
                </label>
                <button type="submit">Save</button>
            </form>
        </Fragment>
    )
}

export default ConcertForm
