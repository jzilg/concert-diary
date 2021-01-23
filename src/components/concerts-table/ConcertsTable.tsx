import React, { FunctionComponent } from 'preact/compat'
import dayjs from 'dayjs'
import Concert, { Concerts } from '../../entities/Concert'
import useOnMount from '../../hooks/useOnMount'
import TableControls from '../table-controls'

export type Props = {
    concerts: Concerts
    loadConcerts: Function
    deleteConcert: Function
}

const ConcertsTable: FunctionComponent<Props> = (props) => {
    const {
        concerts,
        loadConcerts,
        deleteConcert,
    } = props

    useOnMount(() => {
        loadConcerts()
    })

    if (concerts.length === 0) {
        return null
    }

    const rowElements = concerts.map((concert: Concert) => {
        const { id, band, location } = concert
        const supportBands = concert.supportBands.join(', ')
        const companions = concert.companions.join(', ')
        const date = dayjs(concert.date).format('DD.MM.YYYY')
        const editUrl = `concerts/edit?id=${id}`

        function deleteFn(): void {
            deleteConcert(id)
        }

        return (
            <tr key={id}>
                <td>{band}</td>
                <td>{supportBands}</td>
                <td>{location}</td>
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
                    <th>Band</th>
                    <th>Support</th>
                    <th>Location</th>
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

export default ConcertsTable
