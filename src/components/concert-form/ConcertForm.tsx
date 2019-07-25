import React, { useEffect, ReactElement } from 'react'
import Concert from '../../entities/Concert.interface'
import ListInput from '../list-input'
import useFormInput from '../../hooks/useFormInput'
import useListInput from '../../hooks/useListInput'

interface Props {
    concert: Concert
    saveConcert: Function
    goToConcerts: Function
}

function ConcertForm(props: Props): ReactElement {
    const { concert, saveConcert, goToConcerts } = props

    const [band, onBandInputChange, setBand] = useFormInput(concert.band)
    const [supportBands, onSupportBandChange, setSupportBands] = useListInput(concert.supportBands)
    const [location, onLocationInputChange, setLocation] = useFormInput(concert.location)
    const [date, onDateInputChange, setDate] = useFormInput(concert.date)
    const [companions, onCompanionsChange, setCompanions] = useListInput(concert.companions)

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
        goToConcerts()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Band</span>
                <input
                    type="text"
                    value={band}
                    onChange={onBandInputChange}
                    placeholder="Pink Floyd"
                />
            </label>
            <label>
                <span>Support</span>
                <ListInput
                    list={supportBands}
                    onChange={onSupportBandChange}
                    placeholder="The Cure, Talking Heads,..."
                />
            </label>
            <label>
                <span>Location</span>
                <input
                    type="text"
                    value={location}
                    onChange={onLocationInputChange}
                    placeholder="Wuhlheide"
                />
            </label>
            <label>
                <span>Date</span>
                <input
                    type="date"
                    value={date}
                    onChange={onDateInputChange}
                />
            </label>
            <label>
                <span>Companions</span>
                <ListInput
                    list={companions}
                    onChange={onCompanionsChange}
                    placeholder="Leo, Max, Peter,..."
                />
            </label>
            <button type="submit">Save</button>
        </form>
    )
}

export default ConcertForm
