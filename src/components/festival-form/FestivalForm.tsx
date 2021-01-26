import React, { FunctionComponent } from 'preact/compat'
import { useEffect } from 'preact/hooks'
import Festival from '../../entities/Festival'
import ListInput from '../list-input'
import useFormInput from '../../hooks/useFormInput'
import useListInput from '../../hooks/useListInput'

type Props = {
    festival: Festival
    saveFestival: Function
}

const FestivalForm: FunctionComponent<Props> = (props) => {
    const { festival, saveFestival } = props

    const [name, onNameChange, setName] = useFormInput(festival.name)
    const [bands, onBandsChange, setBands] = useListInput(festival.bands)
    const [startDate, onStartDateChange, setStartDate] = useFormInput(festival.date.from)
    const [endDate, onEndDateChange, setEndDate] = useFormInput(festival.date.until)
    const [companions, onCompanionsChange, setCompanions] = useListInput(festival.companions)

    useEffect(() => {
        setName(festival.name)
        setBands(festival.bands)
        setStartDate(festival.date.from)
        setEndDate(festival.date.until)
        setCompanions(festival.companions)
    }, [festival, setName, setBands, setStartDate, setEndDate, setCompanions])

    function handleSubmit(event: Event): void {
        event.preventDefault()
        saveFestival({
            id: festival.id,
            name,
            bands,
            date: {
                from: startDate,
                until: endDate,
            },
            companions,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Name</span>
                <input
                    type="text"
                    value={name}
                    onChange={onNameChange}
                    placeholder="Melt 2010"
                    required
                />
            </label>
            <label>
                <span>Bands</span>
                <ListInput
                    list={bands}
                    onChange={onBandsChange}
                    placeholder="The Strokes, Pearl Jam,..."
                />
            </label>
            <label>
                <span>Start Date</span>
                <input
                    type="date"
                    value={startDate}
                    onChange={onStartDateChange}
                    required
                />
            </label>
            <label>
                <span>End Date</span>
                <input
                    type="date"
                    value={endDate}
                    onChange={onEndDateChange}
                    required
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

export default FestivalForm
