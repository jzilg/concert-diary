import type { FC } from 'preact/compat'
import React from 'preact/compat'
import dayjs from 'dayjs'
import type Concert from '../../entities/Concert'
import useOnMount from '../../hooks/useOnMount'
import TableControls from '../table-controls'
import style from './concertsTable.module.scss'

export type Props = {
    concerts: Concert[]
    loadAllConcerts: Function
    deleteConcert: Function
}

const ConcertsTable: FC<Props> = (props) => {
    const {
        concerts,
        loadAllConcerts,
        deleteConcert,
    } = props

    useOnMount(() => {
        loadAllConcerts()
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

        const deleteFn = (): void => {
            deleteConcert(id)
        }

        return (
            <tr key={id}>
                <td>{band}</td>
                <td>{supportBands}</td>
                <td>{location}</td>
                <td>{date}</td>
                <td>{companions}</td>
                <td className={style.controlTd}>
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
