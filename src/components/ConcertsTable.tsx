import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Concert, { Concerts } from '../entities/Concert.interface'
import style from './concertsTable.scss'

interface Props {
    concerts: Concerts
    deleteConcert: Function
}

function ConcertsTable(props: Props): ReactElement {
    const { concerts, deleteConcert } = props

    const rowElements = concerts.map((concert: Concert) => {
        const { id, band, location } = concert
        const supportBands = concert.supportBands.join(', ')
        const companions = concert.companions.join(', ')
        const date = moment(concert.date).format('DD.MM.YYYY')

        function deleteButtonClickHandler(): void {
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
                    <ul className={style.controlsList}>
                        <li>
                            <Link to={`concerts/edit/${id}`}>Edit</Link>
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
                    <th>Band</th>
                    <th>Support</th>
                    <th>Location</th>
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

export default ConcertsTable
