import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import style from './navigationLinks.scss'

type Props = {
    newConcertUrl: string
    newFestivalUrl: string
}

function NavigationLinks(props: Props): ReactElement {
    const { newConcertUrl, newFestivalUrl } = props
    const links = [
        {
            url: '/concerts',
            label: 'Concerts',
        },
        {
            url: '/festivals',
            label: 'Festivals',
        },
        {
            url: '/statistics',
            label: 'Statistics',
        },
        {
            url: newConcertUrl,
            label: 'Add new concert',
        },
        {
            url: newFestivalUrl,
            label: 'Add new festival',
        },
    ]

    const linkElements = links.map((link) => (
        <li key={`${link.url}-${link.label}`} className={style.listItem}>
            <Link to={link.url}>
                {link.label}
            </Link>
        </li>
    ))

    return (
        <ul>
            {linkElements}
        </ul>
    )
}

export default NavigationLinks
