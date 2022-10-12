import type { FC } from 'preact/compat'
import React from 'preact/compat'
import dayjs from 'dayjs'
import type { Festivals } from '../../entities/Festival'
import type Festival from '../../entities/Festival'
import useOnMount from '../../hooks/useOnMount'
import TableControls from '../table-controls'
import style from './festivalsTable.module.scss'

export type Props = {
    festivals: Festivals
    loadAllFestivals: Function
    deleteFestival: Function
}

const FestivalsTable: FC<Props> = (props) => {
    const {
        festivals,
        loadAllFestivals,
        deleteFestival,
    } = props

    useOnMount(() => {
        loadAllFestivals()
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

        const deleteFn = (): void => {
            deleteFestival(id)
        }

        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{bands}</td>
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
