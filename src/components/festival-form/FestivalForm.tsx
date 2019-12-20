import React, { useState, useEffect, ReactElement } from 'react'
import Festival from '../../entities/Festival'
import ListInput from '../list-input'

type Props = {
    festival: Festival
    saveFestival: Function
}

function FestivalForm(props: Props): ReactElement {
    const { festival, saveFestival } = props

    const [name, setName] = useState(festival.name)
    const [bands, setBands] = useState(festival.bands)
    const [startDate, setStartDate] = useState(festival.date.from)
    const [endDate, setEndDate] = useState(festival.date.until)
    const [companions, setCompanions] = useState(festival.companions)

    useEffect(() => {
        setName(festival.name)
        setBands(festival.bands)
        setStartDate(festival.date.from)
        setEndDate(festival.date.until)
        setCompanions(festival.companions)
    }, [festival])

    function handleSubmit(event): void {
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
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Melt 2010"
                />
            </label>
            <label>
                <span>Bands</span>
                <ListInput
                    list={bands}
                    onChange={(list) => setBands(list)}
                    placeholder="The Strokes, Pearl Jam,..."
                />
            </label>
            <label>
                <span>Start Date</span>
                <input
                    type="date"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                />
            </label>
            <label>
                <span>End Date</span>
                <input
                    type="date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                />
            </label>
            <label>
                <span>Companions</span>
                <ListInput
                    list={companions}
                    onChange={(list) => setCompanions(list)}
                    placeholder="Leo, Max, Peter,..."
                />
            </label>
            <button type="submit">Save</button>
        </form>
    )
}

export default FestivalForm
