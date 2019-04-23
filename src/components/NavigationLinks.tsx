import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    newConcertUrl: string
}

function NavigationLinks({ newConcertUrl }: Props): ReactElement {
    return (
        <ul>
            <li>
                <Link to="/">Concerts</Link>
            </li>
            <li>
                <Link to="statistics">Statistics</Link>
            </li>
            <li>
                <Link to={newConcertUrl}>Add new concert</Link>
            </li>
        </ul>
    )
}

export default NavigationLinks
