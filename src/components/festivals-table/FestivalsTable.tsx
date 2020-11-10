import React, { ReactElement } from 'react'
import dayjs from 'dayjs'
import Festival, { Festivals } from '../../entities/Festival'
import useOnMount from '../../hooks/useOnMount'
import TableControls from '../table-controls'

export type Props = {
    festivals: Festivals
    loadFestivals: Function
    deleteFestival: Function
}

function FestivalsTable(props: Props): ReactElement | null {
    const {
        festivals,
        loadFestivals,
        deleteFestival,
    } = props

    useOnMount(() => {
        loadFestivals()
    })

    if (festivals.length === 0) {
        return null
    }

    const rowElements = festivals.map((festival: Festival) => {
        const { id, name } = festival
        const bands = festival.bands.join(', ')
        const companions = festival.companions.join(', ')
        const startDate = dayjs(festival.date.from).format('DD.MM.YYYY')
        const endDate = dayjs(festival.date.until).format('DD.MM.YYYY')
        const date = `${startDate} - ${endDate}`
        const editUrl = `festivals/edit?id=${id}`

        function deleteFn(): void {
            deleteFestival(id)
        }

        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{bands}</td>
                <td>{date}</td>
                <td>{companions}</td>
                <td>
                    <TableControls
                        editUrl={editUrl}
                        deleteFn={deleteFn}
                    />
                </td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Bands</th>
                    <th>Date</th>
                    <th colSpan={2}>Companions</th>
                </tr>
            </thead>
            <tbody>
                {rowElements}
            </tbody>
        </table>
    )
}

export default FestivalsTable
