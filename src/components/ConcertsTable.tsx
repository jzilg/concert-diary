import React, { ReactElement } from 'react'
import Concert, { Concerts } from '../entities/Concert.interface'

interface Props {
    concerts: Concerts
}

function ConcertsTable({ concerts }: Props): ReactElement {
    const rowElements = concerts.map((concert: Concert) => {
        const {
            act,
            supportAct,
            location,
            date,
            companions,
        } = concert

        return (
            <tr>
                <td>{act}</td>
                <td>{supportAct}</td>
                <td>{location}</td>
                <td>{date}</td>
                <td>{companions}</td>
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
                </tr>
            </thead>
            <tbody>
                {rowElements}
            </tbody>
        </table>
    )
}

export default ConcertsTable
