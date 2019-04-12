import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Concert, { Concerts } from '../entities/Concert.interface'

interface Props {
    concerts: Concerts
    deleteConcert: Function
}

function ConcertsTable(props: Props): ReactElement {
    const { concerts, deleteConcert } = props

    const rowElements = concerts.map((concert: Concert) => {
        const { id, location, date } = concert
        const act = concert.act.join(', ')
        const supportAct = concert.supportAct.join(', ')
        const companions = concert.companions.join(', ')

        function deleteButtonClickHandler(): void {
            deleteConcert(id)
        }

        return (
            <tr key={id}>
                <td>{act}</td>
                <td>{supportAct}</td>
                <td>{location}</td>
                <td>{date}</td>
                <td>{companions}</td>
                <td>
                    <ul>
                        <li>
                            <Link to={`edit/${id}`}>Edit</Link>
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
