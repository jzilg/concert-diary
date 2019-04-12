import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Concert, { Concerts } from '../entities/Concert.interface'

interface Props {
    concerts: Concerts
}

function ConcertsTable({ concerts }: Props): ReactElement {
    const rowElements = concerts.map((concert: Concert) => {
        const {
            id,
            location,
            date,
        } = concert
        const act = concert.act.join(', ')
        const supportAct = concert.supportAct.join(', ')
        const companions = concert.companions.join(', ')

        return (
            <tr>
                <td>{act}</td>
                <td>{supportAct}</td>
                <td>{location}</td>
                <td>{date}</td>
                <td>{companions}</td>
                <td>
                    <Link to={`edit/${id}`}>Edit</Link>
                </td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <td>Band</td>
                    <td>Support</td>
                    <td>Location</td>
                    <td>Date</td>
                    <td>Companions</td>
                    <td />
                </tr>
            </thead>
            <tbody>
                {rowElements}
            </tbody>
        </table>
    )
}

export default ConcertsTable
