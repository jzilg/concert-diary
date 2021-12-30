import React, { useEffect, FC } from 'preact/compat'
import { Link } from 'react-router-dom'
import Concert from '../../entities/Concert'
import ListInput from '../list-input'
import useFormInput from '../../hooks/useFormInput'
import useListInput from '../../hooks/useListInput'
import { FormButtonList, FormButtonListItem } from '../form-button-list'

type Props = {
    concert: Concert
    saveConcert: Function
}

const ConcertForm: FC<Props> = (props) => {
    const { concert, saveConcert } = props

    const [band, onBandInputChange, setBand] = useFormInput(concert.band)
    const [location, onLocationInputChange, setLocation] = useFormInput(concert.location)
    const [date, onDateInputChange, setDate] = useFormInput(concert.date)
    const [companions, onCompanionsInputChange, setCompanions] = useListInput(concert.companions)
    const [
        supportBands,
        onSupportBandInputChange,
        setSupportBands,
    ] = useListInput(concert.supportBands)

    useEffect(() => {
        setBand(concert.band)
        setSupportBands(concert.supportBands)
        setLocation(concert.location)
        setDate(concert.date)
        setCompanions(concert.companions)
    }, [concert]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleSubmit = (event: Event): void => {
        event.preventDefault()
        saveConcert({
            id: concert.id,
            band,
            supportBands,
            location,
            date,
            companions,
        })
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
                    required
                />
            </label>
            <label>
                <span>Support</span>
                <ListInput
                    list={supportBands}
                    onChange={onSupportBandInputChange}
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
                    required
                />
            </label>
            <label>
                <span>Date</span>
                <input
                    type="date"
                    value={date}
                    onChange={onDateInputChange}
                    required
                />
            </label>
            <label>
                <span>Companions</span>
                <ListInput
                    list={companions}
                    onChange={onCompanionsInputChange}
                    placeholder="Leo, Max, Peter,..."
                />
            </label>
            <FormButtonList>
                <FormButtonListItem>
                    <button type="submit">Save</button>
                </FormButtonListItem>
                <FormButtonListItem>
                    <Link to="/concerts">Back to Concerts</Link>
                </FormButtonListItem>
            </FormButtonList>
        </form>
    )
}

export default ConcertForm
