import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import style from './navigationLinks.css'

interface Props {
    newConcertUrl: string
}

function NavigationLinks({ newConcertUrl }: Props): ReactElement {
    return (
        <ul>
            <li className={style.listItem}>
                <Link to="/concerts">Concerts</Link>
            </li>
            <li className={style.listItem}>
                <Link to="/festivals">Festivals</Link>
            </li>
            <li className={style.listItem}>
                <Link to="/statistics">Statistics</Link>
            </li>
            <li className={style.listItem}>
                <Link to={`/${newConcertUrl}`}>Add new concert</Link>
            </li>
        </ul>
    )
}

export default NavigationLinks
