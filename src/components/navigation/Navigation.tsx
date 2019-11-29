import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from '../../entities/NavLink'
import style from './navigation.scss'

type Props = {
    navLinks: NavLinks
}

function Navigation(props: Props): ReactElement {
    const { navLinks } = props

    const linkElements = navLinks.map((link) => (
        <li key={`${link.url}-${link.label}`} className={style.listItem}>
            <Link to={link.url}>
                {link.label}
            </Link>
        </li>
    ))

    return (
        <nav>
            <ul>
                {linkElements}
            </ul>
        </nav>
    )
}

export default Navigation
