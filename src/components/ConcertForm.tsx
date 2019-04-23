import React, { Fragment, useState, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Concert from '../entities/Concert.interface'
import ListInput from './ListInput'

interface Props {
    concert: Concert
    saveConcert: Function
    goToHome: Function
}

function ConcertForm(props: Props): ReactElement {
    const { concert, saveConcert, goToHome } = props

    const [act, setAct] = useState(concert.act)
    const [supportAct, setSupportAct] = useState(concert.supportAct)
    const [location, setLocation] = useState(concert.location)
    const [date, setDate] = useState(concert.date)
    const [companions, setCompanions] = useState(concert.companions)

    function handleSubmit(event): void {
        event.preventDefault()
        saveConcert({
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
        <form onSubmit={handleSubmit}>
            <label>
                <span>Band</span>
                <ListInput
                    list={act}
                    onChange={list => setAct(list)}
                    placeholder="Pink Floyd, The Cure,..."
                />
            </label>
            <label>
                <span>Support</span>
                <ListInput
                    list={supportAct}
                    onChange={list => setSupportAct(list)}
                    placeholder="The Beatles, Talking Heads,..."
                />
            </label>
            <label>
                <span>Location</span>
                <input
                    type="text"
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    placeholder="Wuhlheide"
                />
            </label>
            <label>
                <span>Date</span>
                <input
                    type="date"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                />
            </label>
            <label>
                <span>Companions</span>
                <ListInput
                    list={companions}
                    onChange={list => setCompanions(list)}
                    placeholder="Leo, Max, Peter,..."
                />
            </label>
            <button type="submit">Save</button>
        </form>
    )
}

export default ConcertForm
