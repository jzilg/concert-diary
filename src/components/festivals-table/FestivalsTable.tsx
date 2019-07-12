import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Festival, { Festivals } from '../../entities/Festival.interface'
import style from '../concerts-table/concertsTable.scss'

interface Props {
    festivals: Festivals
    deleteFestival: Function
}

function FestivalsTable(props: Props): ReactElement {
    const { festivals, deleteFestival } = props

    const rowElements = festivals.map((festival: Festival) => {
        const { id, name } = festival
        const bands = festival.bands.join(', ')
        const companions = festival.companions.join(', ')
        const startDate = moment(festival.date.from).format('DD.MM.YYYY')
        const endDate = moment(festival.date.until).format('DD.MM.YYYY')
        const date = `${startDate} - ${endDate}`

        function deleteButtonClickHandler(): void {
            deleteFestival(id)
        }

        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{bands}</td>
                <td>{date}</td>
                <td>{companions}</td>
                <td>
                    <ul className={style.controlsList}>
                        <li>
                            <Link to={`festivals/edit/${id}`}>Edit</Link>
                        </li>
                        <li>
                            <button type="button" onClick={deleteButtonClickHandler}>
                                Delete
                            </button>
                        </li>
                    </ul>
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
                    <th>Companions</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {rowElements}
            </tbody>
        </table>
    )
}

export default FestivalsTable
