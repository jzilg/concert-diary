import React, { useState, useEffect, ReactElement } from 'react'
import Concert from '../entities/Concert.interface'
import ListInput from './ListInput'

interface Props {
    concert: Concert
    saveConcert: Function
    goToHome: Function
}

function ConcertForm(props: Props): ReactElement {
    const { concert, saveConcert, goToHome } = props

    const [band, setBand] = useState(concert.band)
    const [supportBands, setSupportBands] = useState(concert.supportBands)
    const [location, setLocation] = useState(concert.location)
    const [date, setDate] = useState(concert.date)
    const [companions, setCompanions] = useState(concert.companions)

    useEffect(() => {
        setBand(concert.band)
        setSupportBands(concert.supportBands)
        setLocation(concert.location)
        setDate(concert.date)
        setCompanions(concert.companions)
    }, [concert])

    function handleSubmit(event): void {
        event.preventDefault()
        saveConcert({
            id: concert.id,
            band,
            supportBands,
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
                <input
                    type="text"
                    value={band}
                    onChange={event => setBand(event.target.value)}
                    placeholder="Pink Floyd, The Cure,..."
                />
            </label>
            <label>
                <span>Support</span>
                <ListInput
                    list={supportBands}
                    onChange={list => setSupportBands(list)}
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
